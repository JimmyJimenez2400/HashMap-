// Creating a hashmap pure function, this will hash the
import LinkedList from "../hashmap/LinkedList/linkedList.js"

class HashMap {
  constructor(defaultArraySize = 16, loadFactor = 0.75) {
    this.capacity = defaultArraySize;
    this.loadFactor = loadFactor;
    this.hashMapArray = Array.from({length: defaultArraySize}, () => new LinkedList());
  }

  hash(key){
    let hashCode = 0;

    const primeNumber = 31;
    for(let i = 0; i < key.length; i++){
      hashCode = primeNumber * hashCode + key.charCodeAt(i);

      hashCode %= 16;
    }

    return hashCode;
  }

  set(key, value) {
    let hashedKey = this.hash(key);

    let index = hashedKey; //call hash function to return value
    console.log(`Index is: ${index}`)

    if(index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }else if(){

    }
    else{
      this.hashMapArray[index].append(key, value);
    }

    console.log(this.hashMapArray)

  }

  get(key) {
    // hash the argument
  }

  has() {}

}

let test1 = new HashMap();
console.log(test1);
console.log(test1.set("John", "Smith"));
console.log(test1.set("Johnny", "Smother"));
console.log(test1.set("John", "Smith"));
