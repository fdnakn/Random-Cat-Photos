const cat_result = document.getElementById("cat_result");
const cat_btn = document.getElementById("cat_btn");



cat_btn.addEventListener("click",getRandomCat);

async function getRandomCat(){
    
    const res = await fetch("https://aws.random.cat/meow");
    const data = await res.json();

    cat_result.innerHTML = ` <img src="${data.file}" />  ` ;

}