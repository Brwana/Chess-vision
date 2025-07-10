
const container=document.createElement('div');

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
        if(button.textContent==cell){
            content.textContent=button.textContent;
            content.style.display="block";
            content.style.color="green";
            setTimeout(() => {
                content.style.display="none";
            }, 1000);
        }
        else{
            content.textContent=button.textContent;
            content.style.display="block";
            content.style.color="red";
            setTimeout(() => {
                content.style.display="none";
            }, 1000);
        }

   
   
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
document.getElementById("random_cell").appendChild(cellGenerated);
}
    createRandomcell();
