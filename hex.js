// generate 6-character hex values

const hexBtn = document.getElementById('hex-btn');
const spanHex = document.getElementById('span-hex');
let hex_Colors = [0,1,2,3,4,5,5,6,7,8,9,'a','b','c','d','e','f']

hexBtn.addEventListener('click',()=>{
    let color = '#';
    for(let i = 0; i < 6;i++){
        //create a random number each time
        let random = Math.floor(Math.random()*hex_Colors.length)
        //add the random index value
        color += hex_Colors[random]
    }
    spanHex.textContent = color;
    document.body.style.backgroundColor = color;
})
