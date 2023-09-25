function enterStudentMarks(){
    let marks=Number(prompt("Enter student marks between 0 and 100"));
    if(marks>79 && marks<100){
        console.log("A")
    }
    else if(marks>=60 && marks<=79){
        console.log("B")
    }
    else if(marks>=50 && marks<=59){
        console.log("C")

    }
    else if(marks>=40 && marks<=49){
        console.log("D")
    }
    else if(marks>0 && marks<40){
        console.log("E")
    }
    else{
        console.log("Marks should be a 'number' between 'o and 100'!")
    }
}
enterStudentMarks()

