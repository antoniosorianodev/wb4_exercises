let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] },
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] }
];

function getAverage(array) {

    // loop to go through students list
    for (let i = 0; i < array.length; i++) {
        let student = array[i].name;
        let studentScoresSum = 0;


        // loop to go through a student's scores array
        for (let j = 0; j < array[i].scores.length; j++) {
            studentScoresSum += array[i].scores[j];
        }

        let avgScore = studentScoresSum / array[i].scores.length;

        console.log(`The student ${student} has an average score of ${avgScore}`);
    }
}

getAverage(students);