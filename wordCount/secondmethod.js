const input = document.querySelector("textarea");
const count = document.querySelector("button");
const span = document.querySelector("span");
const span2=document.querySelector(".character")
count.addEventListener("click", (e) => {
    e.preventDefault();
    let text = input.value;
    text=text.toLocaleLowerCase()
    countWords(text)
    input.value=""
  });

function countWords(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const specialchar=/[.!@#$%^&*()_+{\}[\];'"<>.?\/`~||:,]/g
    let text
    text=(str.replace(specialchar," "))
    text=str.trim()
    let check=text.split(' ').filter(word=>word)
    
    let ch={}
    for(let i=0;i<=text.length-1;i++){
        let char=text[i]
        char=char.replace(/[" "]/g," ")
       let f= char=char.trim()
        ch[i]=f
        let number
        if(alphabet.includes(char)){
            number=i
        }
        show(check.length,number)                
    }
    console.log(ch)
    }

    function show(wordCount,count){
        span.textContent=wordCount
        span2.textContent=count
      }