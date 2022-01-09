let string=document.querySelector("#string");
let count=document.querySelector("#count");
let disp=document.querySelector("#disp");

const vowels=["a","e","i","o","u","A","E","I","O","U"];

count.addEventListener('click',()=>{
    
    vowelCounter();

})

function vowelCounter(){

    let count = 0;
    let num=string.value;
    // loop through string to test if each character is a vowel
    for (let letter of num) {
        if (vowels.includes(letter)) {
            count++;
            disp.innerHTML=`Total Vowels:<br>${count}`;
        }
    }

    // return number of vowels
    count=0;
    
}

