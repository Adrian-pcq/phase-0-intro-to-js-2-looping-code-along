// Code your solutions in this file
const card = ["Guadalupe", "Ollie", "Aki"];
function writeCards(array,event){
    let newarray = []
for (let i = 0; i< array.length; i++){
   newarray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)

    }return newarray
}
writeCards(["Guadalupe", "Ollie", "Aki"],surprise);

function countDown(){
    let i = 10
    while (i >= 0){
        console.log(i--)
    }
}