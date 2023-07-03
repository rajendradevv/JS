const person = {
    name: 'Pranhat ', gender: 'non binary'
}
//dot notation 
console.log(person.name)
console.log(person.gender)
//bracket notation 
console.log(person['name'])
console.log(person['gender'])


person.phone = "26531782357"
//or
person['phone'] = "26531782357"

// assign value to the object like this also
console.log(person['phone'])

console.log(person)
//try
const person2 = {
    name: 'rajendra', gender: 'straight'
}
console.log(person2)

// using arrow function creating an object 

const introducer = (name, gender) => {

    const pers = {
        x: name, y: gender,
        assets: 100000, libality: 5000,
        networth: function (){
            return this.assets - this.libality  // this refering to the specifically the pers object we created 
        }
    }
    /* in  object creation of the person inside which   x , y , assets , libality
     are been created as same time so it will be hard to call any variable to do
      some operation like we can not do assets - libality and store
       it some where else it will show error as the assets is not defined */
       const intro = `hi , my name is ${pers.x} and my gender is ${pers.y} and my current wort is ${pers.networth()}`
       return intro
   

}
console.log(introducer('Rajendra ', 'straight'))
console.log(introducer('Prabhat', 'non binary'))



