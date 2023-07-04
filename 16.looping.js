const number = [3, 4, 6, 7, 8]
console.log(number[0])
console.log(number[1])
console.log(number[2])
console.log(number[3])
console.log(number[4])

for (let i = 0; i < number.length; i++) {
    console.log(i, number[i])

}
const x = (number) => {
    let result = []
    for (const num of number) {
        // console.log(num)
        result.push(num**2)

    }
    return result
}
y=[1, 2, 3, 4, 5, 6]
console.log(x(y))