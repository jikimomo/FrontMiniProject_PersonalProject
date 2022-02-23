(function(){
    var data = [
        {id: 'asdf', password: 'asdf'},
        {id: '1234', password: '1234'},
        {id: 'aaaa', password: 'aaaa'}
    ];

    function loadEvent() {
        const message = document.getElementsByClassName('alertMessage')[0];
        message.style.display = 'none';

        const btn = document.querySelector('button[type="submit"]');
        btn.addEventListener('click', function(evt){
            const id = document.querySelector('input[name="id"]');
            const password = document.querySelector('input[name="password"]');
            if(!id.value){
                evt.preventDefault();
                message.style.display = 'block';
                message.innerHTML = "아이디를 입력하세요.";
                id.focus();
            }
            else if(!password.value){
                evt.preventDefault();
                message.style.display = 'block';
                message.innerHTML = "비밀번호를 입력하세요.";
                password.focus();
            }
            else{
                data.map((item, index) => {
                    if(item.id===id.value && item.password===password.value){
                        message.style.display = 'none';
                        location.href = "index.html";
                    }
                });
                evt.preventDefault();
                message.style.display = 'block';
                message.innerHTML = "아이디 또는 비밀번호를 잘못 입력했습니다.";
                id.value = '';
                password.value = '';
                id.focus();
            }
        });
    };

    window.addEventListener('load', loadEvent);
})();