function formatGrade(grade) {

    let result = "";

    if (grade < 3.00) {
        result = 'Fail';
        grade = 2
    } 
    else if (grade >= 3.00 && grade < 3.50) {
        result = 'Poor';
    } 
    else if (grade >= 3.50 && grade < 4.50) {
        result = 'Good';
    } 
    else if (grade >= 4.50 && grade < 5.50) {
        result = 'Very good';
    } 
    else {
        result = 'Excellent';
    }
    
    if (grade < 3) {
    console.log(`${result} (${grade})`);
    }
    else {
        console.log(`${result} (${grade.toFixed(2)})`);
    }
}

// Test code
// formatGrade(3.33)
// formatGrade(4.50)
// formatGrade(2.90)