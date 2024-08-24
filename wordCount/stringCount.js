const input = document.querySelector("textarea");
const count = document.querySelector("button");
const span = document.querySelector("span");
const span2=document.querySelector(".character")

// addinput
count.addEventListener("click", (e) => {
  e.preventDefault();
  let text = input.value;
  text=text.toLocaleLowerCase()
  alphabet(text)
  input.value=""
});
function alphabet(str){
  const normalizeText=str.replace(/\s+/g,' ')
  const cleanText=normalizeText.replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"");
  const words=cleanText.split(' ').filter(word=>word)
  let characterCount=(cleanText.replace(/[" "]/g,"").length)
  show(words.length,characterCount)
}
// function  to show
function show(count,characterCount){
  span.textContent=count
  span2.textContent=characterCount
}
















