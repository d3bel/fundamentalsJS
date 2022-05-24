function rightPlace(str, char, answer){
    let repl = str.replace('_', char);
    let print = repl === answer? "Matched": "Not Matched";
    console.log(print);
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String')