
//Khai báo canvas
var canvas = document.querySelector ("#canvas")
canvas.width = 800
canvas.height = 800
canvas.style.border = '2px solid black'
var bcv = canvas.getContext('2d')
console.log(bcv)


//vòng lặp
for(j=0; j<8; j++){
    for(i=0; i<8; i++){
        if(j%2 == 0){
            if(i%2==0){
                bcv.fillStyle = "black"
                bcv.fillRect(i*100, j*100, 100, 100)
            }
            else{
                bcv.fillStyle = "white"
                bcv.fillRect(i*100, j*100, 100, 100)
            }
        }
        else{
            if(i%2!=0){
                bcv.fillStyle = "black"
                bcv.fillRect(i*100, j*100, 100, 100)
            }
            else{
                bcv.fillStyle = "white"
                bcv.fillRect(i*100, j*100, 100, 100)
            }
        }
    }
}
