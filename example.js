//Array 
//Here we are going to make a few array concepts

let colors = ["black", "red", "blue", "white"]
console.log(colors)
console.log(colors.length)
console.log(colors.length - 1)
console.log(colors[0])
console.log(colors[colors.length - 1])


//mix of int ans string 
let array = [5, 6, 7, 8, 'a', "sudharshini", [100, 200]]
console.log(array)
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[6][0])

// 2d array
let mix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(mix)
console.log(mix[0])
console.log(mix[0][1])
console.log(mix[1][2])
console.log(mix[2], [1])


// array methods
let arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr)

//add elements
arr.push('f')
console.log(arr)

//add the element on middle

arr.push('sudharshini')
console.log(arr)

// pop -removes elements 
console.log(arr.pop())
console.log(arr)

//removes element from start of the array and returns removed value
arr.shift('a')
console.log(arr)

//splice
let array1 = ['a', 'b', 'c', 'd', 'e']
    //array1.splice(2, 1)
    //console.log(array1)

array1.splice(2, 2)
console.log(array1)

//delete a element and also replace a new element  
array1.splice(1, 1, 'm')
console.log(array1)

// no need to delete any elements
array1.splice(1, 0, 'sudharshini')
console.log(array1)

// add x,y also
array1.splice(1, 2, 'x', 'y')
console.log(array1)

//slice

let word = ['a', 'b', 'c', 'd', 'e']
    //console.log(word.splice(1, 2))
    //console.log(word.splice(1, 3))

//array reverse
word.reverse()
console.log(word)

//try my name to reverse

let arrayy = ['sudharshini', 'sudha']
arrayy.reverse()
console.log(arrayy)

//join - converts array to string

let str = arrayy.join()
console.log(str)

let string = word.join()
console.log(string)

let example = [100, 200, 300, 400]
let conver = example.join()
console.log(conver)

//convert string to array 

let stringg = "a,b,c,d"
let converting = stringg.split(',')
console.log(stringg)

let stringgg = ("Sudharshini")
console.log(stringgg.split("s"))