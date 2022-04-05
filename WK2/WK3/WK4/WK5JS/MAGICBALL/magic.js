const userName = "ali";
userName ? console.log('Hello, ${userName}!'): console.log('Hello!')
let userQuestion =  "Will I be the oldest person alive?"
console.log('${userName} asked:${userQuestion}');
let randomNumber = Math.floor(Math.random()*8)
let eightball = "";

if (randomNumber === 0){
  eightball = 'It is certain'
} else if (randomNumber ===1){
  eightball = 'It is decidedly so'

} else if (randomNumber ===2){
  eightball = 'Reply hazy try again'

} else if (randomNumber ===3){
  eightball = 'Cannot predict now'

} else if (randomNumber ===4){
  eightball = 'Do not count on it'

} else if (randomNumber ===5){
  eightball = 'My sources say no'

} else if (randomNumber ===6){
  eightball = 'Outlook not so good'

} else if (randomNumber ===7){
  eightball = 'Signs point to yes'
}else {
  console.log('Something is broken');
}
console.log(eightball);
