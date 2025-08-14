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
const best = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France"




);
console.log(best);


