const groceries = ['🍕','🍔','🍟','🌭','🍿']
console.log(groceries) 
console.log(groceries[0])
console.log(groceries[1])
console.log(groceries[2])
console.log(groceries[3])
console.log(groceries[4])

// adding an element in an array 
groceries.push('👽')
console.log(groceries)

// Slice method to grab element from the starting point to the ending point 
//🍕','🍔','🍟','🌭','🍿','👽'
//0     1     2    3     4    5 
// take one index more until you want to print
// like in the below example i want to print upto 0-2 so i wrote slice(0,3)
console.log(groceries.slice(0,3))