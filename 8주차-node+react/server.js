const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '7주차-react/build')));
app.use(cors({ origin: 'http://localhost:3000' }));
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');

app.use(passport.initialize());
app.use(
  session({
    secret: '암호화에 쓸 비번',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000, secure: false, httpOnly: false },
  })
);

app.use(passport.session());

passport.use(
  new LocalStrategy(async (id, password, cb) => {
    let result = await db.collection('user').findOne({ username: id });
    if (!result) {
      return cb(null, false, { message: '존재하지 않는 계정 정보입니다.' });
    }
    if (result.password == password) {
      return cb(null, result);
    } else {
      return cb(null, false, { message: '비밀번호가 일치하지 않습니다.' });
    }
  })
);

passport.serializeUser(async (user, done) => {
  console.log('serializeUser user : ', user);
  let result = await db
    .collection('user')
    .findOne({ _id: new ObjectId(user.id) });
  process.nextTick(() => {
    done(null, { id: user._id, username: user.username });
  });
});

passport.deserializeUser((user, done) => {
  process.nextTick(() => {
    return done(null, user);
  });
});

let db;
const url =
  'mongodb+srv://admin:qwer1234@simsorry.gs3mckv.mongodb.net/?retryWrites=true&w=majority&appName=simsorry';
new MongoClient(url)
  .connect()
  .then(client => {
    console.log('DB Connect');
    db = client.db('forum');
    app.listen(8080, () => {
      console.log('http://localhost:8080 에서 서버 실행중');
    });
  })
  .catch(err => {
    console.log(err);
  });

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/7주차-react/build/index.html'));
});

app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/7주차-react/build/index.html'));
});

app.post('/auth/signup', async (req, res) => {
  console.log(req.body);
  const result = await db
    .collection('user')
    .findOne({ username: req.body.username });

  if (result != null) {
    //로그인 DB에 존재하는 ID일 경우
    res.status(401).send('이미 존재하는 아이디입니다.');
  } else {
    try {
      await db
        .collection('user')
        .insertOne({ username: req.body.username, password: req.body.password })
        .then(() => {
          res.json({ message: '회원가입 성공!' });
        });
    } catch (e) {
      res.status(500).send('server error');
    }
  }
});

app.post('/auth/login', async (req, res, next) => {
  // const result = await db
  //   .collection('user')
  //   .findOne({ username: req.body.username, password: req.body.password });

  // if (result == null) {
  //   //로그인 DB에 없을 경우
  //   res.status(401).send('존재하지 않는 정보입니다.');
  // } else {
  //   res.status(200).send('로그인에 성공했습니다.');
  // }
  passport.authenticate('local', (error, user, info) => {
    if (error) return res.status(500).json(error);
    if (!user) return res.status(401).json(info.message);
    req.logIn(user, err => {
      if (err) return next(err);
      res
        .status(200)
        .json({ message: '로그인에 성공했습니다.', cookie: user.username });
    });
  })(req, res, next);
});
