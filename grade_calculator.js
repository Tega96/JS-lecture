/**
 * Write a function that takes a student's score (0 - 100) and return their grade:
 * 90 - 100: 'A'
 * 80-89: "B"
 * 70-79: "C"
 * 60-69: "D"
 * Below 60: "F"
 */

function calculatorGrade(score) {
    // Your code here
    // if (score >= 90 && score <= 100) {
    //     return "A";
    // } else if (score >= 80 && score <= 89){
    //     return "B"
    // }else if (score >= 70 && score <= 79){
    //     return "C"
    // } else if (score >= 60 && score <= 69){
    //     return "D"
    // } else if (score < 60){
    //     return "F"
    // }

    if (score >= 90 && score <= 100) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else if (score < 60) {
        return "F"
    }
}


console.log(calculatorGrade(95));
console.log(calculatorGrade(84))
console.log(calculatorGrade(45))
