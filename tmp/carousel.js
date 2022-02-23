window.addEventListener('load', function() {
  clearMessages();

  //carousel event
  var carousels = document.getElementsByClassName('carousel');
  for(var i=0; i<carousels.length; i++){
    addEventToCarousel(carousels[i]);
  }
});

function clearMessages() {
  var messages = document.getElementsByClassName("alert-message");
  for(var i=0; i<messages.length; i++){
    messages[i].style.display = "none";
  }
}

function addEventToCarousel(carouselElem) {
  var ulElem = carouselElem.querySelector('ul');
  var liElems = ulElem.querySelectorAll('li');

  var liWidth = liElems[0].clientWidth;
  var adjustedWidth = liElems.length * liWidth;
  ulElem.style.width = adjustedWidth + 'px';

  var slideButtons = carouselElem.querySelectorAll('.slide');
  for(var i=0; i<slideButtons.length; i++){
    slideButtons[i].addEventListener('click', createListenerSlide(carouselElem));
  }
}

function createListenerSlide(carouselElem){
  return function(event){ //여기서 event는 따로 값을 받는 것이 아니라 자동적으로 event값이 들어옴(다른 이름으로 써도 됨)
    var clickedButton = event.currentTarget;

    //값 가져오기
    var liElems = carouselElem.querySelectorAll('li');
    var liCount = liElems.length;
    var currentIndex = carouselElem.attributes.data.value; //data의 value!!

    //슬라이드 버튼 체크
    if(clickedButton.className.includes('right') && currentIndex < liCount - 1){
      currentIndex++;
      scrollDiv(carouselElem, currentIndex);
    }
    else if(clickedButton.className.includes('left') && currentIndex > 0){
      currentIndex--;
      scrollDiv(carouselElem, currentIndex);
    }

    //인디케이터 업데이트
    updateIndicator(carouselElem, currentIndex);

    //슬라이드 버튼 보여줌 여부 업데이트
    updateSlideButtonVisible(carouselElem, currentIndex, liCount);
    //새롭게 보여지는 이미지 인덱스 업데이트
    carouselElem.attributes.data.value = currentIndex;
  }
}

function scrollDiv(carouselElem, nextIndex){
  var scrollable = carouselElem.querySelector('div');
  var liWidth = scrollable.clientWidth;
  var newLeft = liWidth * nextIndex;

  scrollable.scrollTo({left: newLeft, behavior: 'smooth'});
}

function updateIndicator(carouselElem, currentIndex){
  var indicators = carouselElem.querySelectorAll('footer > div');
  for (var i=0; i<indicators.length; i++){
    if(currentIndex == i){
      indicators[i].className = 'active';
    }
    else{
      indicators[i].className = 'none';
    }
  }
}

function updateSlideButtonVisible(carouselElem, currentIndex, liCount){
  var left = carouselElem.querySelector('.slide-left');
  var right = carouselElem.querySelector('.slide-right');

  if(currentIndex > 0){
    left.style.display = 'block';
  }
  else{
    left.style.display = 'none';
  }

  if(currentIndex < liCount -1){
    right.style.display = 'block';
  }
  else{
    right.style.display = 'none';
  }
}
