// problem-01
function totalFine(fare) {
    if (fare > 0 && typeof (fare) === "number") {
        const fine = fare + fare * (0.2) + 30
        return fine
    }
    else if (fare < 0) {
        return 'Invalid';
    }
    else {
        return "Invalid";
    }
}



// problem - 02

function onlyCharacter(str) {
    if (typeof (str) === "string") {
        const removeWhiteSpace = str.replaceAll(" ", "");
        const character = removeWhiteSpace.toUpperCase();
        return character;

    }
    else {
        return "Invalid";
    }
}

// problem - 03


function bestTeam(player1, player2) {
    if (typeof (player1, player2) === "object") {
        const player1_foul = player1.foul;
        const player1_redCard = player1.cardR;
        const player1_yellowCard = player1.cardY;
        let player1_total = player1_foul + player1_redCard + player1_yellowCard;


        const player2_foul = player2.foul;
        const player2_redCard = player2.cardR;
        const player2_yellowCard = player2.cardY;
        let player2_total = player2_foul + player2_redCard + player2_yellowCard;

        if (player1_total > player2_total) {
            return player2.name
        }
        else if (player1_total < player2_total) {
            return player1.name
        }
        else {
            return "Tie"
        }
    }
    else {
        return "Invalid";
    }


}



// problem - 04 

function isSame(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        if (arr1.length === arr2.length) {

            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false
                }

            }

            return true

        }
        else {
            return false
        }

    }

    else {
        return "Invalid"
    }
}



// problem-05

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


