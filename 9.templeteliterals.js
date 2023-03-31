function yourname(name){
    greet=`hi ${name} is my son` //always use backticks
    //String Interpolation Referencing a variable within a string. In this case, ${name) will be replaced with the value of name 
    console.log(greet)

}
yourname("prabhat")