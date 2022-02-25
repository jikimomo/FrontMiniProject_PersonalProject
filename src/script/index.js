(function(){

    function makeTemplate(data){
        var contentTemplate = '<div class="content"><img src="${imageSrc}" onclick="location.href=\'content.html\'"></div>';
        
        var contents = document.querySelector('div[class="contents"]');
        var dom = "";
        data.forEach(function(item){
            var tmp = contentTemplate;
            dom += tmp.replace('${imageSrc}', item.src);
        });
        contents.innerHTML = dom;
    }

    function loadEvent() {
        //data
        const data = [
            {animal: "dog", breed: "2", gender: "male", neutral: "yes", region: "seoul", src: "images/introImage.jpg"},
            {animal: "dog", breed: "0", gender: "female", neutral: "no", region: "incheon", src: "images/dog3.jpg"},
            {animal: "dog", breed: "21", gender: "male", neutral: "yes", region: "seoul", src: "images/dog2.jpg"},
            {animal: "cat", breed: "5", gender: "female", neutral: "no", region: "incheon", src: "images/cat1.jpg"},
            {animal: "cat", breed: "19", gender: "male", neutral: "yes", region: "daejeon", src: "images/cat2.jpg"},
            {animal: "cat", breed: "19", gender: "male", neutral: "no", region: "seoul", src: "images/cat3.jpg"},
            {animal: "cat", breed: "1", gender: "female", neutral: "no", region: "daejeon", src: "images/cat4.jpg"},
            {animal: "cat", breed: "7", gender: "female", neutral: "yes", region: "incheon", src: "images/cat5.jpg"},
            {animal: "hamster", breed: "0", gender: "male", neutral: "no", region: "seoul", src: "images/hamster1.jpg"},
            {animal: "hedgehog", breed: "all", gender: "male", neutral: "no", region: "seoul", src: "images/hedgehog1.jpg"}
        ];

        const dog = ["골든 리트리버", "그레이 하운드", "닥스훈트", "달마시안", "도베르만", "라브라도 리트리버", "말티즈", "보더콜리",
                    "보스톤테리어", "불개", "불독", "비글", "비숑프리제", "사모예드", "삽살이", "세인트버나드", "세퍼트", "스탠다드 푸들",
                    "시바견", "시베리안 허스키", "시츄", "알래스카 말라뮤트", "요크셔테리어", "진돗개", "치와와", "퍼그", "포메라니안",
                    "푸들", "풍산개", "프렌치불독", "핏불테리어", "그 외 강아지"];
        const cat = ["노르웨이 숲", "러시안 블루", "렉돌", "먼치킨", "뱅갈", "브리티쉬 숏헤어", "사바나 캣", "샴", "셀커크 렉스", "스코티쉬 폴드", 
                    "스핑크스", "아메리칸 숏헤어", "아메리칸컬", "아비시니안", "친칠라", "터키쉬 밴", "터키쉬 앙고라", "페르시안", "하바나", "한국 고양이", "그 외 고양이"];
        const hamster = ["드워프 햄스터", "골든 햄스터"];

        //select element
        var selectAnimal = document.querySelector('select[name="animal"]');
        var selectBreed = document.querySelector('select[name="breed"]');
        var selectRegion = document.querySelector('select[name="region"]');

        //초기 화면 
        makeTemplate(data);

        //동물별로 품종 띄우기
        selectAnimal.addEventListener('change', function(){
            var currentAnimal = [];
            if(selectAnimal.options[selectAnimal.selectedIndex].value === "dog"){
                currentAnimal = dog;
                console.log('dog');
            }
            else if(selectAnimal.options[selectAnimal.selectedIndex].value === "cat"){
                currentAnimal = cat;
                console.log('cat');
            }
            else if(selectAnimal.options[selectAnimal.selectedIndex].value === "hamster"){
                currentAnimal = hamster;
                console.log('hamster');
            }

            selectBreed.options.length = 0;
            var option = document.createElement("option");
            option.value = "all";
            option.innerHTML = "전체";
            selectBreed.appendChild(option);
            for(var i=0; i<currentAnimal.length; i++){
                var option = document.createElement("option");
                option.value = i;
                option.innerHTML = currentAnimal[i];
                selectBreed.appendChild(option);
            }
        });

        //검색 버튼 이벤트
        var searchBtn = document.getElementById('searchBtn');
        searchBtn.addEventListener('click', function() {
            //각 value
            var animal = selectAnimal.options[selectAnimal.selectedIndex].value;
            var breed = selectBreed.options[selectBreed.selectedIndex].value;
            var gender = document.querySelector('input[name="gender"]:checked').value;
            var neutral = document.querySelector('input[name="neutral"]:checked').value;
            var region = selectRegion.options[selectRegion.selectedIndex].value;
            
            var result = data.filter(function(item){
                if((item.animal===animal || animal==="all") && (item.breed===breed || breed==="all") && (item.gender===gender || gender==="allgender") && (item.neutral===neutral || neutral==="all") && (item.region===region || region==="all")){
                    return true;
                }
            });
            
            makeTemplate(result);
        });
    }

    window.addEventListener('load', loadEvent);
})();