function resultReport(marks) {
    if (marks.length === 0 && Array.isArray(marks) === true) {
        return {
            finalScore: 0,
            pass: 0,
            fail: 0
        }

    }
    else if (Array.isArray(marks) === true) {
        let passNum = 0;
        let failNum = 0;
        let totalResult = 0;
        for (const mark of marks) {
            totalResult = totalResult + mark;

            if (mark >= 40) {
                passNum++
            }
            else {
                failNum++
            }
        }


        let avgMarks = totalResult / marks.length
        const result = {
            finalScore: Math.round(avgMarks),
            pass: passNum,
            fail: failNum
        }

        return result

    }

    else {
        return "Invalid"
    }
}
const marks = resultReport([99]



)
console.log(marks);


