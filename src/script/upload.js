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
        //data
        const dog = ["골든 리트리버", "그레이 하운드", "닥스훈트", "달마시안", "도베르만", "라브라도 리트리버", "말티즈", "보더콜리",
                "보스톤테리어", "불개", "불독", "비글", "비숑프리제", "사모예드", "삽살이", "세인트버나드", "세퍼트", "스탠다드 푸들",
                "시바견", "시베리안 허스키", "시츄", "알래스카 말라뮤트", "요크셔테리어", "진돗개", "치와와", "퍼그", "포메라니안",
                "푸들", "풍산개", "프렌치불독", "핏불테리어", "그 외 강아지"];
        const cat = ["노르웨이 숲", "러시안 블루", "렉돌", "먼치킨", "뱅갈", "브리티쉬 숏헤어", "사바나 캣", "샴", "셀커크 렉스", "스코티쉬 폴드", 
                "스핑크스", "아메리칸 숏헤어", "아메리칸컬", "아비시니안", "친칠라", "터키쉬 밴", "터키쉬 앙고라", "페르시안", "하바나", "한국 고양이", "그 외 고양이"];
        const hamster = ["드워프 햄스터", "골든 햄스터"];

        //alert 메세지 지우기
        clearMessage();

        //element
        const selectRegion = document.querySelector('select[name="region"]');
        const selectAnimal = document.querySelector('select[name="animal"]');
        const selectBreed = document.querySelector('select[name="breed"]');
        const inputAge = document.querySelector('input[name="age"]'); 
        const radioGender = document.getElementsByName('gender');
        const radioNeutral = document.getElementsByName('neutral');
        const textVaccine = document.querySelector('textarea[name="vaccine"]');
        const textDisease = document.querySelector('textarea[name="disease"]');
        const textOther = document.querySelector('textarea[name="other"]');
        const images = document.querySelector('input[name=images]');

        //강아지 품종으로 초기화
        for(var i=0; i<dog.length; i++){
            var option = document.createElement("option");
            option.value = i;
            option.innerHTML = dog[i];
            selectBreed.appendChild(option);
        }

        //동물별로 품종표시
        selectAnimal.addEventListener('change', function(){
            var currentAnimal = [];
            if(selectAnimal.options[selectAnimal.selectedIndex].value === "dog"){
                currentAnimal = dog;
            }
            else if(selectAnimal.options[selectAnimal.selectedIndex].value === "cat"){
                currentAnimal = cat;
            }
            else if(selectAnimal.options[selectAnimal.selectedIndex].value === "hamster"){
                currentAnimal = hamster;
            }
            else {
                currentAnimal = ["전체"];
            }

            selectBreed.options.length = 0;
            for(var i=0; i<currentAnimal.length; i++){
                var option = document.createElement("option");
                option.value = i;
                option.innerHTML = currentAnimal[i];
                selectBreed.appendChild(option);
            }
        });
        
        //image 미리보기
        const inputImages = document.getElementById("images")
        inputImages.addEventListener("change", event => {
            clearMessage();
            readImages(event)
        });
        function readImages(event){
            document.querySelector("div#imageContainer").innerHTML = "";
            for(var image of event.target.files){
                var reader = new FileReader();
                
                reader.onload = function(event){
                    var img = document.createElement("img");
                    img.setAttribute("src", event.target.result);
                    img.setAttribute("class", "col-lg-6");
                    img.setAttribute("width", "430px");
                    document.querySelector("div#imageContainer").appendChild(img);
                };
                
                reader.readAsDataURL(image);
            }
        }

        const btn = document.querySelector('button[type="submit"]');
        btn.addEventListener('click', function(evt){
            clearMessage();

            if(!inputAge.value){
                evt.preventDefault();
                showMessage(inputAge, "나이를 입력하세요.");
                inputAge.focus();
            }
            else if(!radioGender[0].checked && !radioGender[1].checked){
                evt.preventDefault();
                showMessage(radioGender[0], "성별을 선택하세요.");
            }
            else if(!radioNeutral[0].checked && !radioNeutral[1].checked){
                evt.preventDefault();
                showMessage(radioNeutral[0], "중성화유무를 선택하세요.");
            }
            else if(!textVaccine.value){
                evt.preventDefault();
                showMessage(textVaccine, "예방접종이력을 입력하세요. 없다면 없음이라고 작성하세요.");
                textVaccine.focus();
            }
            else if(!textDisease.value){
                evt.preventDefault();
                showMessage(textDisease, "질병사항을 입력하세요. 없다면 없음이라고 작성하세요.");
                textDisease.focus();
            }
            else if(!textOther.value){
                evt.preventDefault();
                showMessage(textOther, "특이사항을 입력하세요. 없다면 없음이라고 작성하세요.");
                textOther.focus();
            }
            else if(!images.files.length){
                evt.preventDefault();
                const message = images.parentNode.querySelector('span');
                message.innerHTML = "사진을 첨부하세요.";
                message.style.display = 'block';
            }
            else if(images.files.length>5){
                evt.preventDefault();
                const message = images.parentNode.querySelector('span');
                message.innerHTML = "5개 이하로 첨부하세요.";
                message.style.display = 'block';
                images.value = "";
                document.getElementById('imageContainer').innerHTML = "";
            }
            else if(isNaN(inputAge.value)){
                evt.preventDefault();
                showMessage(inputAge, "숫자만 입력할 수 있습니다.");
                inputAge.value = '';
                inputAge.focus();
            }
            else{
                evt.preventDefault();
                location.href = 'successUpload.html';
            }
        });

        //사이트 이름 클릭 시 이동
        const logo = document.querySelector('div[class="siteNameBox"]');
        logo.addEventListener('click', function(){
            location.href = "index.html";
        });
    };

    window.addEventListener('load', loadEvent);
})();