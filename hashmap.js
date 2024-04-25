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
      // we should expland the hashmap or load factor
    }else if(this.has(key, index)){
      console.log("OVERWRITING");
      let findKeyInBucket = this.hashMapArray[index].find(key);
      findKeyInBucket.value = value;

    }else{
      this.hashMapArray[index].append(key, value);
      console.log(`Setting ${key} to ${value} at ${index} to ${this.hashMapArray[index]}`);
      console.log(this.hashMapArray[index]);

    }
  }

  display(index){
    // display the bucket we want to see.
    console.log(this.hashMapArray[index]);
  }

  has(key, index){
    let bucketSize = this.hashMapArray[index].size()

    let  current =  this.hashMapArray[index].head();

    for(let i = 0; i < bucketSize; i++){
      let nodeKey = current.key;

      if(nodeKey === key){
        console.log("MATCH FOUND");
        return true;
      }else{
        console.log("MATCH NOT FOUND");
        current = current.nextNode;
      }
    }

    return false;
  }
}

let test1 = new HashMap();

test1.set("John", "Doe");
test1.set("John", "MARK");
test1.set("John", "Doe");
test1.set("John", "MARK");
test1.set("John", "Doe");
test1.set("John", "MARK");
test1.set("John", "Doe");
test1.set("John", "MARK");
test1.set("John", "Doe");
test1.set("John", "MARK");

test1.display(11);






