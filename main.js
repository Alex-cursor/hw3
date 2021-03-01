//1
function getMaxDigit(number) {
    const getString = number.toString()
    const getArray = getString.split('')
    const maxNumber = Math.max(...getArray)
    return maxNumber
}
console.log (getMaxDigit) 

//2
function findPow(number, pow) {
   let numberOfPow = 1
    for (let i = 0; i < pow; i++){
   numberOfPow = numberOfPow*number
    }
    return numberOfPow
}
console.log (findPow)

//3
function editName(name){
    return name[0].toUpperCase() + name.slice(1).tolowercase()
} 
console.log (editName)

//4
function salaryAfterTax(salary) {
    const tax1 = salary * 0.18
    const tax2 = salary * 0.015
  return salary - tax1 - tax2
}
console.log(salaryAfterTax)

//5
function getRndomNumber(min,max) {
    const randomNumber = Math.random*(max-min) + min
    return Math.round(randomNumber)
}
console.log(getRndomNumber)

//6
function checkLetter (word, letter) {
    let calculator = 0
    for ( let i = 0; i < word.length; i++) {
         const letterIndex = word[i]    
         if (letterIndex === letterIndex) {
             calculator = calculator + 1
         }
        }
return calculator
}
console.log (checkLetter)


