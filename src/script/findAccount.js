$(document).ready(function () {
    var data = [
        {id: "aaaa", password: "aaaaaaaaaa", name: "nolbu", email: "aaaa@naver.com", phone: "01012345678", address: "서울 강남대로 11"},
        {id: "bbbb", password: "bbbbbbbbbb", name: "hungbu", email: "bbbb@daum.net", phone: "01098765432", address: "서울 강남대로 22"}
    ];

    // alertMessage 안 보이게 하기
    $('.alertMessage').attr('style', 'display:none');
    $('.alertMessage2').attr('style', 'display:none');
    $('#name1').val('');
    $('#email1').val('');
    $('#id2').val('');
    $('#name2').val('');
    $('#email2').val('');

    
    $("#findIdBtn").on("click", function(e){
        $('.alertMessage').attr('style', 'display:none');
        $('.alertMessage2').attr('style', 'display:none');
        console.log("id button");

        if(!$('#name1').val()){
            console.log('이름없음');
            $('#name1').parent().next().next().text("이름을 입력하세요.");
            $('#name1').parent().next().next().attr('style', 'display:block');
            $('#name1').focus();
        }
        else if(!$('#email1').val()){
            console.log('이메일없음');
            $('#email1').parent().next().next().next().text("이메일을 입력하세요.");
            $('#email1').parent().next().next().next().attr('style', 'display:block');
            $('#email1').focus();
        }
        else{
            var result = data.filter(function(item){
                var email = $('#email1').val()+"@"+$('#emailAdd1').val();
                if(item.name === $('#name1').val() && item.email === email){
                    console.log("match");
                    return true;
                }
            });
            if(result.length == 0){
                $('#name1').val('');
                $('#email1').val('');
                $('#alertMessageId').text("일치하는 회원정보가 없습니다.");
                $('#alertMessageId').attr('style', 'display:block')
            }
            else {
                $(location).attr('href', 'searchId.html');
            }
        }
    });

    $("#findPwBtn").on("click", function(e){
        // onclick="location.href='searchPassword.html'"
        $('.alertMessage').attr('style', 'display:none');
        $('.alertMessage2').attr('style', 'display:none');
        console.log("pw button");

        if(!$('#id2').val()){
            console.log('아이디없음');
            $('#id2').parent().next().next().text("아이디를 입력하세요.");
            $('#id2').parent().next().next().attr('style', 'display:block');
            $('#id2').focus();
        }
        else if(!$('#name2').val()){
            console.log('이름없음');
            $('#name2').parent().next().next().text("이름을 입력하세요.");
            $('#name2').parent().next().next().attr('style', 'display:block');
            $('#name2').focus();
        }
        else if(!$('#email2').val()){
            $('#email2').parent().next().next().next().text("이메일을 입력하세요.");
            $('#email2').parent().next().next().next().attr('style', 'display:block');
            $('#email2').focus();
        }
        else{
            var result = data.filter(function(item){
                var email = $('#email2').val()+"@"+$('#emailAdd2').val();
                if(item.id === $('#id2').val() && item.name === $('#name2').val() && item.email === email){
                    console.log("match");
                    return true;
                }
            });
            if(result.length == 0){
                $('#id2').val('');
                $('#name2').val('');
                $('#email2').val('');
                $('#alertMessagePw').text("일치하는 회원정보가 없습니다.");
                $('#alertMessagePw').attr('style', 'display:block')
            }
            else {
                $(location).attr('href', 'searchPassword.html');
            }
        }
    });

    $('.siteNameBox').click(function() {
        $(location).attr('href', 'index.html');
    });
});