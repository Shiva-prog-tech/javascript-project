// var score=[0,0];
// var roundscore=0;
// var activeplayer=0;
// var name1=prompt("1st player name ");
// var name2=prompt("2nd player name");
// document.querySelector('#name-1').textContent=name2;
// document.getElementById('name-0').textContent=name1;
// document.querySelector(".dice").style.display="none";
// document.getElementById("current-0").textContent='0';
// document.getElementById("score-0").textContent='0';
// document.getElementById("current-1").textContent='0';
// document.getElementById("score-1").textContent='0';
var score,roundscore,activeplayer, gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener('click',function(){
if(gamePlaying){
    var dice=Math.floor(Math.random()*6)+1;
    var diceDom=document.querySelector(".dice");
    diceDom.style.display="block";
    diceDom.src="dice-"+dice+".png";
if(dice!==1){
    roundscore+=dice;
    document.querySelector("#current-"+activeplayer).textContent=roundscore;
}else{
    
    nextPlayer();

}
} 
    
   
});

document.querySelector(".btn-hold").addEventListener('click',function(){
if(gamePlaying){
        score[activeplayer]+=roundscore;
    
//update it on UI
document.querySelector("#score-"+activeplayer).textContent=score[activeplayer];

//winner
if(score[activeplayer]>=50){
    document.querySelector("#name-"+activeplayer).textContent='winner!';
    document.querySelector(".dice").style.display="none";
    document.querySelector(".player-"+activeplayer+"-panel").classList.add('winner!');
    document.querySelector(".player-"+activeplayer+"-panel").classList.remove('active');
    gamePlaying= false;
}
else{

//next player
nextPlayer();
}
}

});

function nextPlayer(){
    if(activeplayer===0){
        activeplayer=1;
        roundscore=0;
        document.querySelector('#current-0').textContent='0';
        document.querySelector(".player-0-panel").classList.toggle('active');
        document.querySelector(".player-1-panel").classList.toggle('active');
        document.querySelector(".dice").style.display="none";
        
     }
     else{
         activeplayer=0;
         roundscore=0;
         document.querySelector('#current-1').textContent='0';
         
         document.querySelector(".player-1-panel").classList.toggle('active');
         document.querySelector(".player-0-panel").classList.toggle('active');
         document.querySelector(".dice").style.display="none";
         
 
     }

};

document.querySelector(".btn-new").addEventListener('click',init);

function init(){
score=[0,0];
roundscore=0;
activeplayer=0;
gamePlaying=true;


    
var diceDom1=document.querySelector(".dice");
    // diceDom1.style.display="block";
    // diceDom1.src="back.jpg";
    diceDom1.style.display="none";
    
document.getElementById("current-0").textContent='0';
document.getElementById("score-0").textContent='0';
document.getElementById("current-1").textContent='0';
document.getElementById("score-1").textContent='0';
var name1=prompt("1st player name ");
var name2=prompt("2nd player name");
document.getElementById('name-0').textContent=name1;
document.querySelector('#name-1').textContent=name2;

document.querySelector("#name-0").classList.remove('winner!');
document.querySelector("#name-1").classList.remove('winner!');
document.querySelector(".player-0-panel").classList.remove('active');
document.querySelector(".player-1-panel").classList.remove('active');
document.querySelector(".player-0-panel").classList.add('active');


}