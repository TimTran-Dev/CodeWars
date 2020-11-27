function whoIsPaying(name){
    const initial = name.slice(0, 2)
    if(name === initial){
        return [name]
    } else {
        return [name, initial]
    }
}