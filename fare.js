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
const fine = totalFine("gorib tai ticket katinai");
console.log(fine);


