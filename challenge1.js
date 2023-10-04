function enterStudentMarks(){
    let marks=Number(prompt("Enter student marks between 0 and 100"));//Enter the student marks
    //if marks between 79 and 100 print A
    if(marks>79 && marks<100){
        console.log("A")
    }
    //if marks from 60 to 79 print B
    else if(marks>=60 && marks<=79){
        console.log("B")
    }
    //if marks from 50 to 59 print C
    else if(marks>=50 && marks<=59){
        console.log("C")

    }
    //if marks from 40 to 49 print D
    else if(marks>=40 && marks<=49){
        console.log("D")
    }
    //IF mark btw 0 and 40 print E
    else if(marks>0 && marks<40){
        console.log("E")
    }
    //marks not number and btw 0 and 100 print error message
    else{
        console.log("ERROR! MARKS should be a 'number' between 'o and 100'!")
    }
}
enterStudentMarks()//call the function

