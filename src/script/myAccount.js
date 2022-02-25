$(document).ready(function(){
    //data
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

    //사용자 정보
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

    //내가 올린/저장한 입양글
    uploadFunc(uploadData);
    savedFunc(savedData);

    //사이트 이름 클릭 시 이동 이벤트
    $('.siteNameBox').click(function() {
        $(location).attr('href', 'index.html');
    });

    //menu tab 이벤트
	$('.menu li').click(function(){
		var tabId = $(this).attr('id');

		$('.menu li').removeClass('current');
		$('.tabContent').removeClass('current');

		$(this).addClass('current');
		$("#"+tabId+"Content").addClass('current');
	});

    //내가 올린 입양글에 요소 동적 할당하는 함수
    function uploadFunc(data){
        data.forEach(function(item, index){
            if(item.id === currentId){
                console.log(item);
                console.log(index)
                var imageBox = document.createElement("div");
                imageBox.setAttribute("class", "imageBox");
            
                var img = document.createElement("img");
                img.setAttribute("src", item.upload);
            
                var deleteButton = document.createElement("button");
                deleteButton.setAttribute("type", "button");
                deleteButton.setAttribute("class", "deleteBtn");
                deleteButton.setAttribute("id", item.imageId);
                deleteButton.addEventListener("click", deleteContent);
            
                var deleteText = document.createTextNode("삭제하기");
                deleteButton.appendChild(deleteText);
            
                var br = document.createElement("br");
                var ind = index+1;
            
                $('#tab2Content').append(imageBox);
                $('#tab2Content .imageBox:nth-child('+ind+')').append(img);
                $('#tab2Content .imageBox:nth-child('+ind+')').append(br);
                $('#tab2Content .imageBox:nth-child('+ind+')').append(deleteButton);
            }
        });
    }

    //내가 저장한 입양글에 요소 동적 할당하는 함수
    function savedFunc(data){
        data.forEach(function(item, index){
            if(item.id === currentId){
                console.log(item);
                console.log(index)
                var imageBox = document.createElement("div");
                imageBox.setAttribute("class", "imageBox");
            
                var img = document.createElement("img");
                img.setAttribute("src", item.saved);
            
                var deleteButton = document.createElement("button");
                deleteButton.setAttribute("type", "button");
                deleteButton.setAttribute("class", "cancelBtn");
                deleteButton.setAttribute("id", item.imageId);
                deleteButton.addEventListener("click", cancelContent);
            
                var deleteText = document.createTextNode("저장 취소");
                deleteButton.appendChild(deleteText);
            
                var br = document.createElement("br");
                var ind = index+1;
            
                $('#tab3Content').append(imageBox);
                $('#tab3Content .imageBox:nth-child('+ind+')').append(img);
                $('#tab3Content .imageBox:nth-child('+ind+')').append(br);
                $('#tab3Content .imageBox:nth-child('+ind+')').append(deleteButton);
            }
        });
    }

    //내가 올린 입양글 중 삭제버튼
    function deleteContent(evt){
        var deleteId = $(evt.target).attr('id');
        var uploadModify = uploadData;

        for(var i=0; i<uploadModify.length; i++){
            if(uploadModify[i].imageId === deleteId){
                uploadModify.splice(i, 1);
                i--;
            }
        }

        console.log(uploadModify);
        $('#tab2Content').empty();
        uploadFunc(uploadModify);
    }

    //내가 저장한 입양글 중 취소버튼
    function cancelContent(evt){
        var cancelId = $(evt.target).attr('id');
        var savedModify = savedData;

        for(var i=0; i<savedModify.length; i++){
            if(savedModify[i].imageId === cancelId){
                savedModify.splice(i, 1);
                i--;
            }
        }

        console.log(savedModify);
        $('#tab3Content').empty();
        savedFunc(savedModify);
    }
});