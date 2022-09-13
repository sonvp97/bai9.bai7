function clickyes (){
    alert("<3");
}
function clickno (){
    let x=Math.random()*window.innerHeight;
    let y=Math.random()*window.innerWidth;
    document.getElementById('No').style.left= x +'px';
    document.getElementById('No').style.top= y +'px';
}