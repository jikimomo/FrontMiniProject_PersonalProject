$(document).ready(function(){
    var data = [
        {id: "aaaa", password: "aaaaaaaaaa", name: "nolbu", email: "aaaa@naver.com", phone: "01012345678", address: "서울 강남대로 11"},
        {id: "bbbb", password: "bbbbbbbbbb", name: "hungbu", email: "bbbb@daum.net", phone: "01098765432", address: "서울 강남대로 22"}
    ];
    var uploadData = [
        {id: "aaaa", upload: "images/cat1.jpg", imageId: "1"},
        {id: "aaaa", upload: "images/cat2.jpg", imageId: "2"},
        {id: "bbbb", upload: "images/introImage.jpg", imageId: "3"}
    ];
    var savedData = [
        {id: "aaaa", saved: "images/cat2.jpg", imageId: "1"},
        {id: "aaaa", saved: "images/cat3.jpg", imageId: "2"},
        {id: "aaaa", saved: "images/introImage.jpg", imageId: "3"}
    ];
    const currentId = "aaaa";

    var accountTemplate = '<div class="infoBox"><strong>사용자 이름</strong> : ${name}</div><div class="infoBox"><strong>이메일</strong> : ${email}<br></div><div class="infoBox"><strong>전화번호</strong> : ${phone}<br></div><div class="infoBox"><strong>주소</strong> : ${address}<br></div>';
    data.forEach(function(item){
        if(item.id === currentId){
            var tmp = accountTemplate;
            var dom = tmp.replace('${name}', item.name)
            .replace('${email}', item.email)
            .replace('${phone}', item.phone)
            .replace('${address}', item.address);

            $('#tab1Content').append(dom);
        }
    });
    
    var uploadTemplate = '<div class="imageBox"><img src="${imageSrc}""><br><button type="button" class="deleteBtn" id="deleteBtn">삭제하기</button></div>';
    uploadData.forEach(function(item, index){
        if(item.id === currentId){
            var tmp = uploadTemplate;
            var dom = tmp.replace('${imageSrc}', item.upload);

            $('#tab2Content').append(dom);
        }
    });

    var savedTemplate = '<div class="imageBox"><img src="${imageSrc}""><br><button type="button" class="deleteBtn" id="deleteBtn">저장 취소</button></div>';
    savedData.forEach(function(item, index){
        if(item.id === currentId){
            var tmp = savedTemplate;
            var dom = tmp.replace('${imageSrc}', item.saved);

            $('#tab3Content').append(dom);
        }
    });

    $('.siteNameBox').click(function() {
        $(location).attr('href', 'index.html');
    });

	$('.menu li').click(function(){
		var tabId = $(this).attr('id');

		$('.menu li').removeClass('current');
		$('.tabContent').removeClass('current');

		$(this).addClass('current');
		$("#"+tabId+"Content").addClass('current');
	});
});