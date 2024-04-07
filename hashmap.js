// Creating a hashmap pure function, this will hash the
import LinkedList from "./linkedList/linkedList";

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
      let hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    let hashedKey = hash(key);

    let index = hashedKey; //call hash function to return value

    if(index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }else{

    }
  }

  get() {
    // hash the argument
  }

  has() {}
}

let test1 = new HashMap();
console.log(test1);
