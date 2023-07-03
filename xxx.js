const inputs = document.querySelectorAll(".form-control");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
const form = document.querySelector(".php-email-form"),
        nextBtn = form.querySelector(".text-center"),
       allInput = form.querySelectorAll(".form-control");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})


/*.........page-loader................*/
 const spinnerwrapperEi= document.querySelector(".spinner-wrapper");
 
 setTimeout(()=>{
  spinnerwrapperEi.style.opacity='0';},1000)

