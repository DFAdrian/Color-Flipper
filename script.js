const normalBtn = document.getElementById('normal-btn');
const spanNormal = document.getElementById('span-normal');
let colors = ['Blue','rgba(133,122,200)','#f00','#f15025'];



normalBtn.addEventListener('click',()=>{
    //create a randon number 
    let random = Math.floor(Math.random()*colors.length);
    //pick the color with the random index 
    spanNormal.textContent = `${colors[random]}`;
    document.body.style.backgroundColor = colors[random]
})

