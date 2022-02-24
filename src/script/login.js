(function(){
    var data = [
        {id: 'asdf', password: 'asdfasdfas'},
        {id: '1234', password: '1234567890'},
        {id: 'aaaa', password: 'aaaaaaaaaa'},
        {id: 'bbbb', password: 'bbbbbbbbbb'}
    ];

    function loadEvent() {
        const message = document.getElementsByClassName('alertMessage')[0];
        message.style.display = 'none';

        const btn = document.querySelector('button[type="submit"]');
        btn.addEventListener('click', function(evt){
            const id = document.querySelector('input[name="id"]');
            const password = document.querySelector('input[name="password"]');
            message.style.display = 'none';

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
                evt.preventDefault();
                var flag = false;
                data.map((item, index) => {
                    if(item.id===id.value && item.password===password.value){
                        flag = true;
                    }
                });
                
                if(flag){
                    message.style.display = 'none';
                    location.href = "index.html";
                }
                else {
                    evt.preventDefault();
                    message.style.display = 'block';
                    message.innerHTML = "아이디 또는 비밀번호를 잘못 입력했습니다.";
                    id.value = '';
                    password.value = '';
                    id.focus();
                }
            }
        });

        const logo = document.querySelector('div[class="siteNameBox"]');
        logo.addEventListener('click', function(){
            location.href = "index.html";
        });
    };

    window.addEventListener('load', loadEvent);
})();