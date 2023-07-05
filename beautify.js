document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let heart = this.createElement('div');
    heart.setAttribute("class", "yes");
    let x=e.offsetX;
    let y=e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';

    let size = Math.random()*80;
    heart.style.width = 20+size+'px';
    heart.style.height = 20+size+'px';

    let transformValue = Math.random()*360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function(){
        heart.remove()
    },1000)
})