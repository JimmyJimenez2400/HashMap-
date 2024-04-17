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

    let index = hashedKey;


    if(index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }else{
      console.log(this.hashMapArray[index].append(key, value));
      
    }
    
  }

  get(key) {
    // hash the argument
  }

  has(key) {
    
  }

  remove(key){}

  length(){

  }

  clear(){

  }

  keys(){}

  values(){}

  entries(){}

}

let test1 = new HashMap();

console.log(test1.hash("Carlos"));

console.log(test1.hash("Carla"));




