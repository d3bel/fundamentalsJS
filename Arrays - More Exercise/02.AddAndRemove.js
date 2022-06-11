function addAndRemove(array){
    let printLine = []
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'add'){
            printLine.push(i + 1)
        } else{
            printLine.pop()
        }
    } if(printLine.length === 0){
        console.log("Empty");
    } else {
        console.log(printLine.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])