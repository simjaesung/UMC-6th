const checkname = document.getElementById("name");
const checkemail = document.getElementById("email");
const checkage = document.getElementById("age");
const checkpass = document.getElementById("pass");
const checkrepass = document.getElementById("repass");
const btn = document.getElementById("btn");

let allcorrect = [0,0,0,0,0];

btn.onclick = () =>{
    //이름
    var name = checkname.value;
    var email = checkemail.value;
    var age = checkage.value;
    var pass = checkpass.value;
    var repass = checkrepass.value;

    //1. 이름 판별
    //빈 문자열이 아닌지, 문자열이며 숫자가 아닌 경우 통과
    if(name.length > 0 && typeof name == 'string'&& isNaN(name)){
        document.getElementById("name-correct").style.display = "block";
        document.getElementById("name-wrong").style.display = "none";
        allcorrect[0] = 1;
    }
    else{
        document.getElementById("name-wrong").style.display = "block";
        document.getElementById("name-correct").style.display = "none";
        allcorrect[0] = 0;
    }

    //2. 이메일 판별
    if(email.length > 0 && typeof email == 'string' && email.includes('@')){
        document.getElementById("email-correct").style.display = "block";
        document.getElementById("email-wrong").style.display = "none";
        allcorrect[1] = 1;
    }
    else{
        document.getElementById("email-wrong").style.display = "block";
        document.getElementById("email-correct").style.display = "none";
        allcorrect[1] = 0;
    }

    //3. 나이 판별
    var agewrong = document.getElementsByClassName("age-wrong");
    //display none으로 초기화
    for(var i = 0; i < agewrong.length; i++){
        agewrong[i].style.display = "none";
    }
    document.getElementById("age-correct").style.display = "none";

    if(age.length == 0){
        //입력을하지않은 경우
        agewrong[0].style.display = "block";
        allcorrect[2] = 0;
    }
    else if(isNaN(age)){
        //문자열인 경우
        agewrong[1].style.display = "block";
        allcorrect[2] = 0;
    }
    else if(age < 0){
        //음수인 경우
        agewrong[2].style.display = "block";
        allcorrect[2] = 0;
    }
    else if(age % 1 != 0){
        //소수인 경우
        agewrong[3].style.display = "block";
        allcorrect[2] = 0;
    }
    else if(age < 19){
        //미성년자인 경우
        agewrong[4].style.display = "block";
        allcorrect[2] = 0;
    }
    else{
        document.getElementById("age-correct").style.display = "block";
        allcorrect[2] = 1;
    }

    //4.비밀번호 판별
    
    var wrongpass = document.getElementsByClassName("pass-wrong");
    for(var i = 0; i< wrongpass.length; i++){
        wrongpass[i].style.display = "none";
    }
    document.getElementById("pass-correct").style.display = "none";

    //비밀번호 정규식
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    if(passwordRegex.test(pass)){
        document.getElementById("pass-correct").style.display = "block";
        allcorrect[3] = 1;
    }
    else{
        allcorrect[3] = 0;
        if(pass.length < 4){
            //4자리 이하
            wrongpass[0].style.display = "block";
        }
        else if(pass.length > 12){
            //12자리 초과
            wrongpass[1].style.display = "block";
        }
        else{
            //형식을 지키지않을 경우
            wrongpass[2].style.display = "block";
        }
    }


    //5.비밀번호 일치 판별
    document.getElementById("repass-wrong").style.display = "none";
    document.getElementById("repass-correct").style.display = "none";
    if(repass.length == 0 || repass != pass){
        document.getElementById("repass-wrong").style.display = "block";
        allcorrect[4] = 0;
    }
    else{
        document.getElementById("repass-correct").style.display = "block";
        allcorrect[4] = 1;
    }




    //모든 요건을 충족했을 경우
    let check = 1;
    for(var i = 0; i<5; i++){
        if(allcorrect[i] == 0) {
            check = 0;
        }
    }
    if(check){
        document.getElementsByClassName("correct-modal-bg")[0].style.display = "flex";
    }
}