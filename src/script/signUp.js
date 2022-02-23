(function(){

    function clearMessage(){
        const messages = document.getElementsByClassName('alertMessage');
        for(var i=0; i<messages.length; i++){
            messages[i].style.display = 'none';
        }
    };

    function showMessage(inputElem, inputMessage){
        const message = inputElem.parentNode.parentNode.querySelector('span');
        message.style.display = 'block';
        message.innerHTML = inputMessage;
    }

    function loadEvent() {
        const id = document.querySelector('input[name="id"]');  
        const password = document.querySelector('input[name="password"]'); 
        const checkPW = document.querySelector('input[name="checkPW"]');
        const name = document.querySelector('input[name="name"]'); 
        const email = document.querySelector('input[name="email"]'); 
        const phone = document.querySelector('input[name="phone"]'); 
        const address = document.querySelector('input[name="address"]');
        
        clearMessage();
        id.value = '';
        password.value = '';
        checkPW.value = '';
        name.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';

        const cancelBtn = document.querySelector('button[type="button"]');
        cancelBtn.addEventListener('click', function(){
            clearMessage();
            location.href = "index.html";
        });

        const btn = document.querySelector('button[type="submit"]');
        btn.addEventListener('click', function(evt){
            
            if(!id.value){
                evt.preventDefault();
                clearMessage();
                showMessage(id, "아이디를 입력하세요");
                id.focus();
            }
            else if(!password.value){
                evt.preventDefault();
                clearMessage();
                showMessage(password, "비밀번호를 입력하세요.");
                password.focus();
            }
            else if(!checkPW.value){
                evt.preventDefault();
                clearMessage();
                showMessage(checkPW, "비밀번호를 입력하세요.");
                checkPW.focus();
            }
            else if(password.value !== checkPW.value){
                evt.preventDefault();
                clearMessage();
                showMessage(checkPW, "입력한 비밀번호가 다릅니다.");
                checkPW.value = '';
                checkPW.focus();
            }
            else if(!name.value){
                evt.preventDefault();
                clearMessage();
                showMessage(name, "이름을 입력하세요.");
                name.focus();
            }
            else if(!email.value){
                evt.preventDefault();
                clearMessage();
                showMessage(email, "이메일을 입력하세요.");
                email.focus();
            }
            else if(!phone.value){
                evt.preventDefault();
                clearMessage();
                showMessage(phone, "전화번호를 입력하세요.");
                phone.focus();
            }
            else if(!address.value){
                evt.preventDefault();
                clearMessage();
                showMessage(address, "주소를 입력하세요.");
                address.focus();
            }
            else{
                evt.preventDefault();
                clearMessage();
                location.href = "successSignUp.html";
            }
        });
    };

    window.addEventListener('load', loadEvent);
})();