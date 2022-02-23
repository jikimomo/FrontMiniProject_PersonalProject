window.addEventListener('load', function() {
  //load('load 완료');
  clearMessages();

  var formElem = document.querySelector('form');
  formElem.onsubmit = submitForm;

  //month 추가
  var selectInput = document.querySelector('select[name="birth-month"]');
  for(var i=1; i<=12; i++){
    var option = document.createElement('option');
    option.innerHTML = i+'월';
    option.value = i;

    selectInput.appendChild(option);
  }
});

function clearMessages() {
  var messages = document.getElementsByClassName("alert-message");
  for(var i=0; i<messages.length; i++){
    messages[i].style.display = "none";
  }
}

function showMessage(inputElement, message){
  var messageElem = inputElement.parentNode.querySelector('span');
  messageElem.style.display = 'inline';
  messageElem.innerHTML = message;

  inputElement.focus();
}

function submitForm() {
  //account info
  var accountInput = document.querySelector('input[name="account"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var passwordConfirmInput = document.querySelector('input[name="password2"]');

  var selectInput = document.querySelector('select[name="birth-month"]');
  var radioInput = document.querySelector('input[name="gender"]:checked');
  var checkInput = document.querySelector('input[name="agree"]');

  console.log(accountInput.value);
  console.log(passwordInput.value);
  console.log(passwordConfirmInput.value);

  console.log(selectInput.value);
  console.log(radioInput.value);
  console.log(checkInput.value);

  var success = true;
  if(accountInput.value.length < 6){
    showMessage(accountInput, "계정 아이디는 6자리 이상이어야합니다.");
    success = false;
  }
  if(passwordInput.value.length < 10){
    showMessage(passwordInput, "비밀번호는 10자리 이상이어야합니다.");
    success = false;
  }
  if(passwordInput.value != passwordConfirmInput.value){
    showMessage(passwordConfirmInput, "입력한 비밀번호가 다릅니다.");
    success = false;
  }

  return success;
}
