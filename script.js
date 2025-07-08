
const container=document.createElement('div');

for (i='h'.charCodeAt(0);i>='a'.charCodeAt(0);i--){

    for(j=0;j<8;j++){

    const button=document.createElement('button');
    if(i%2==0 && j%2==0 ||i%2!=0 && j%2!=0 ){

       button.id="similar";
    }
    else{
        button.id="not_similar";
    }

    button.textContent=`${String.fromCharCode(i)}${j}`;

    const content=document.getElementById("button_content");

    button.onclick=function (){

    content.textContent=button.textContent;
    content.style.display="block";

    setTimeout(() => {
        content.style.display="none";
    }, 1000);
};
    container.appendChild(button);
    }
container.appendChild(document.createElement('br'));

}
document.getElementById("grid").appendChild(container);


