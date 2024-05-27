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

  display(i){
    // display the bucket we want to see.
    return this.hashMapArray[i];
  }


  has(key){
    for(let i  = 0; i < this.capacity; i++){
      let current = this.hashMapArray[i].head();

      while(current){
        if(current.key === key){
          console.log("TRUE");
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
        }
        current = current.nextNode;
      }

    }

    return false;
  }

  remove(key){
    for(let i = 0; i < this.capacity; i++){
      let current = this.hashMapArray[i].head();
      let previous = null;

      while(current !== null){
        let nextNode = current.nextNode;
        let currentKey = current.key;

        if(currentKey === key){
          if(previous === null){
            this.hashMapArray[i].headNode = nextNode;
          

          }else{
            previous.nextNode = nextNode;
            console.log(previous);
          }

          return true;
        }
        
        previous = current;
        current = current.nextNode;
      }
    }

    return false;
  }

  length(){
    let size = 0;

    for(let i = 0; i < this.capacity; i++){
      let current = this.hashMapArray[i].head();
      while(current){
        if(current !== null){
          size++;
        }
        current = current.nextNode;
      }
    }
    console.log(size);
    return size;
  }

  clear(){
    return this.hashMapArray = Array.from({length: this.capacity}, () => new LinkedList());
  }

  keys(){

    let keysInArray = [];
    for(let i = 0; i < this.capacity; i++){
      let current = this.hashMapArray[i].head();

      if(current !== null){
        while(current){

          let key = current.key;
          

          keysInArray.push(key);

          current = current.nextNode;
        }
      }
    }

    return keysInArray;
  }
  values(){
    let valuesInArray = [];
    for(let i = 0; i < this.capacity; i++){
      let current = this.hashMapArray[i].head();

      if(current !== null){
        while(current){

          let value = current.value;

          valuesInArray.push(value);

          current = current.nextNode;
        }
      }
    }

    return valuesInArray;
  }

  entries(){

    let entryStorage = [];
    for(let i = 0; i < this.capacity; i++){

      let current = this.hashMapArray[i].head();

      
      if(current !== null){
        
        while(current){

          let key = current.key;
          let value = current.value;

          entryStorage.push([key, value]);

          current = current.nextNode;
        }
      }
      
    }
    return entryStorage;
  }
}

let test1 = new HashMap();

test1.set("John", "Doe");
test1.set("Mike", "LMAO");
test1.set("Susan", "Wright");
test1.set("Wendal", "Soe");
test1.set("Mark", "Lucas");
test1.set("Mason", "Jimenez");

console.log(test1.display(14));

test1.remove("Mason");

console.log("After Remove: ");
console.log(test1.display(14));
