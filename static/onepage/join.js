const ID = document.getElementById('id')
const PW = document.getElementById('pw')
const PW2 = document.getElementById('pw2')
const EMAIL = document.getElementById('Email')

// sign up 클릭 시 다음 페이지 넘어가도록 작업.






// id는 소문자와 대문자가 포함되지 않으면 동작하지 않게 처리
let languageTpye = /^[A-Za-z0-9]{4,10}$/;
if(ID = languageTpye.ID.value) {"조건이 맞지 않습니다"}







// Password 두개의 입력값이 같지 않으면 동작하지 않게 처리
// email 입력 부분은 “@(atsign)”과, @이후 .(dot)이 존재하지 않으면 동작하지 않게 처리
// 위 3개의 입력값이 모두 적절할때 아래 Sign up 버튼 동작
