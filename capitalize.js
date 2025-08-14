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
const str = onlyCharacter(true);
console.log(str);



