function missingLetters(str) {
    let compare = str.charCodeAt(0)
    let missing = ''
    str.split('').map((val, i) => {
        if (str.charCodeAt(i) == compare) {
            ++ compare
        } else {
            missing = String.fromCharCode(compare)
        }
    })
    return missing
}


console.log(missingLetters('abde')) // --> c