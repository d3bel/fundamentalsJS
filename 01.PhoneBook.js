function phoneBook(array) {
    let phoneBookList = {};
    array.forEach(people =>{
        let [name, number] = people.split(' ');
        phoneBookList[name] = number;
    })
    for(let eachPerson in phoneBookList){
        console.log(`${eachPerson} -> ${phoneBookList[eachPerson]}`);
    }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
