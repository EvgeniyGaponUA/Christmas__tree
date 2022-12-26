let tree=document.querySelector('.christmas-tree');
let treePick=document.querySelector('.christmas-tree__pick');


function chrisTree() {
    let numb=+document.querySelector('.box__select').value;
    let out='';
    for(let i=0; i<numb+3; i++){
        let str='';
        if(i<numb) {
                if(i%2==0) {
                    for(let k=-1; k<i; k++){
                        if(k%2 == 0) {
                            str += `<span class='ball-tree'></span>`  
                        }
                        else {
                            str += `<span class='leaf-tree'></span>`
                        }
                    }
                }
                else {
                    for(let k=-1; k<i; k++){
                        str += `<span class='leaf-tree'></span>`
                    }
                }
            }
        else {
                str += `<span class='base-tree'></span>`
            } 
            out += `<div>${str}</div>`
    }
    treePick.innerHTML=out;
    document.getElementsByClassName('leaf-tree')[0].classList.add('star-tree');
    }
    chrisTree();
    document.querySelector('.box__select').onchange = chrisTree;


