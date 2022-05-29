function commonElements(arr1, arr2) {
    for( let symb of arr1 ) {
        for( let symb2 of arr2 ) {
            if(symb === symb2){
                console.log(symb);
            }
        }
    }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
