//array 01
let country = ["usa", "uk", "swiss", "japan", "canada"]
console.log(country)
console.log(country[country.length - 1])
console.log(country[0])
console.log(country.length)

//array 02 
let number = [1, 2, 3, 4, 5, 6, "a", "abc", [10, 20]]
console.log(number[8][0])
console.log(number[6])
console.log(number[7][1])

//array 03
let num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(num[0][1])

//array methods

let happy = ['a', 'b', 'c', 'd', 'e']
happy.push('f')
console.log(happy)

happy.pop()
console.log(happy)

happy.shift()
console.log(happy)

happy.unshift('a')
console.log(happy)

//splice 
let go = ['a', 'b', 'c', 'd', 'e']
go.splice(1, 2)
console.log(go)

go.splice(1, 0, 'm')
console.log(go)

go.splice(1, 0, 'x', 'y')
console.log(go)

//slice

let ji = ['a', 'b', 'c', 'd', 'e']
console.log(ji.slice(1, 3))



ji.reverse()
console.log(ji)

//join
//this one is array convert to string
let stt = ji.join()
console.log(stt)

let string0 = 'wel, come'
let array0 = string0.split(',')
console.log(string0)

//concat and spread operator

let arrayOne = [10, 20, 30]
let arrayTwo = [40, 50, 60]
console.log(arrayOne.concat(arrayTwo))
console.log(...arrayOne, ...arrayTwo)
console.log(arrayOne, arrayTwo)