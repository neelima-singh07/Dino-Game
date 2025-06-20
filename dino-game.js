const dino=document.getElementsByClassName('dino')[0];
function jump(){
    dino.classList.add('jump');
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 300);
}
let isAlive=setInterval(() => {
    let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactus=document.getElementsByClassName('cactus')[0];
    let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    
    if(cactusLeft<45 && cactusLeft>0 && dinoTop>=140){
        alert("Game Over");
    }
    {/*set cactus postion back to rightmost corner */}
    if(cactusLeft<0){
        cactus.style.left='100%';
    }

},10)
{/*calculate score of dino */}
let score=0;
setInterval(() => {
    score++;
    document.getElementById('score').innerHTML="Score: "+score;
}, 100);
{/*display game over on 50 % screen */}


document.addEventListener('keydown', function(event) {
    jump();

}); 