function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let cat = [];
  for (let currCat of array) {
    currCat = currCat.split(" ");
    let newCat = new Cat(currCat[0], currCat[1]);
    cat.push(newCat);
  }
  for (let theCat of cat) {
    theCat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
