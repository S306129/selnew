function smoothscroll(target, duration){
    var target = target;
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    
    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime; 
        var run = ease(timeElapsed, startPosition, distance, duration );
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t,b,c,d){
        t /= d /2;
        if(t < 1) return c/2 * t * t + b;
        t--;
        return -c /2 * (t * (t -2) - 1) + b;
    }


    requestAnimationFrame(animation);
}



var boxList = document.querySelectorAll('.box');
var navList = document.querySelectorAll('li');


console.log(boxList);
navList[0].addEventListener('click',function(){
    smoothscroll(boxList[0],1000);
})

navList[1].addEventListener('click',function(){
    smoothscroll(boxList[1],1000);
})

navList[2].addEventListener('click',function(){
    smoothscroll(boxList[2],1000);
})

navList[3].addEventListener('click',function(){
    smoothscroll(boxList[3],1000);
})
