
const container=document.createElement('div');

for (i='a'.charCodeAt(0);i<'i'.charCodeAt(0);i++){
    for(j=0;j<8;j++){
    const button=document.createElement('button');
    button.textContent=`${String.fromCharCode(i)}${j}`;
    container.appendChild(button);
    }
container.appendChild(document.createElement('br'));

}
document.getElementById("grid").appendChild(container)