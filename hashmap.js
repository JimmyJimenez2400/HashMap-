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
      
      let findKeyInBucket = this.hashMapArray[index].find(key);
      findKeyInBucket.value = value;

    }else{
      this.hashMapArray[index].append(key, value);

    }
  }

  display(index){
    // display the bucket we want to see.
    console.log(this.hashMapArray[index]);
  }

  has(key, index){ // edit this one, so it doesn't use two arguments, only "key".
    let bucketSize = this.hashMapArray[index].size()

    let  current =  this.hashMapArray[index].head();

    for(let i = 0; i < bucketSize; i++){
      let nodeKey = current.key;

      if(nodeKey === key){
        return true;
      }else{
        current = current.nextNode;
      }
    }

    return false;
  }

  hasV2(key){
    for(let i  = 0; i < this.capacity; i++){
      let current = this.hashMapArray[i].head();

      while(current){
        if(current.key = key){
          return true;
        }else{
          current = current.nextNode;

        }
      }
    }

    return false; 
  }

  get(key){
    for(let i = 0; i < this.capacity; i++){
      console.log(this.hashMapArray[i]);
      console.log(this.hashMapArray[i].head())

      let current = this.hashMapArray[i].head();

      while(current){
        let currentKey = current.key;


        if(key === currentKey){
          console.log("KEY FOUND");
          console.log(current.value);
          return current.value;
        }else{
          current = current.nextNode;
        }
      }

    }

    return false;
  }

  remove(key){

  }
}

let test1 = new HashMap();

test1.set("John", "Doe");
test1.set("Mike", "LMAO");

console.log(test1.hasV2("John"));






