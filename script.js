
const container=document.createElement('div');
     correct=0;
     wrong=0;

function createGrid(){
for (i=8;i>=1;i--){

    for(j='a'.charCodeAt(0);j<='h'.charCodeAt(0);j++){

    const button=document.createElement('button');
    if(i%2==0 && j%2==0 ||i%2!=0 && j%2!=0 ){

       button.id="same_color";
    }
    else{
        button.id="different_color";
    }

    button.textContent=`${String.fromCharCode(j)}${i}`;

    const content=document.getElementById("button_content");


    button.onclick=function (){
        
        const cell=document.getElementById("random_cell").textContent;
        const score_R=document.getElementById("correct");
        const score_W=document.getElementById("wrong");

        if(button.textContent==cell){
            content.textContent=button.textContent;
            content.style.display="block";
            content.style.color="green";
            setTimeout(() => {
                content.style.display="none";
            }, 1000);
            correct=correct+1;
   
        }
        else{
            content.textContent=button.textContent;
            content.style.display="block";
            content.style.color="red";
            setTimeout(() => {
                content.style.display="none";
            }, 1000);
            wrong+=1;

        }
          score_R.textContent=`${correct}`;
          score_W.textContent=`${wrong}`;
       createRandomcell();

   
};
    container.appendChild(button);
    }
container.appendChild(document.createElement('br'));

}
document.getElementById("grid").appendChild(container);
}

createGrid();



function createRandomcell(){
const cellGenerated=document.getElementById("random_cell");
const chars="abcdefgh";
indexchar=Math.floor((Math.random()*8));
num=Math.floor((Math.random()*8))+1;
cellGenerated.textContent=`${chars.charAt(indexchar)}${num}`;
}
    createRandomcell();
