function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var screenPosition = window.innerHeight/1.3;
    var introPosition = introText.getBoundingClientRect().top;
    console.log(screenPosition);

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }


}   
  window.addEventListener('scroll', scrollAppear);
