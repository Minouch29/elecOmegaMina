console.log("test doc js ");

const selec = document.querySelector('.selecValue');
const div = document.querySelector('.polaroid');
const div2 = document.querySelector('.polaroid3');
const div3 = document.querySelector('.polaroid2');

selec.addEventListener('change', setPrestation);

function setPrestation() {
    const choice = selec.value;
    if (choice === '3') {
        div.style.display = "block";
        div2.style.display = "none";
        div3.style.display = "none";

        console.log("coucou"); 
    }
    if (choice === '2') {
        div2.style.display = "block";
        div.style.display = "none";
        div3.style.display = "none";

        console.log("coucou");
      } else if (choice === '1') {
        div3.style.display = "block";
        div2.style.display = "none";
        div.style.display = "none";

        console.log("coucou");
        
      } ;
}
