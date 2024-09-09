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
      console.log(this.GrowBucket());
      // we should expland the hashmap or load factor
    }else if(this.has(key, index)){
      
      let findKeyInBucket = this.hashMapArray[index].find(key);
      findKeyInBucket.value = value;

    }else{
      this.hashMapArray[index].append(key, value);

    }

    return this.hashMapArray;
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

  GrowBucket(){
    let maxSize = this.capacity * this.loadFactor;
    console.log(`maxSize Allowed: ${maxSize}`);

    let entriesInHashMap = this.length();
    console.log(`entriesInHashMap: ${entriesInHashMap}`)

    let doubleSizeOfBucket = this.capacity*2;

    let oldBucket = this.hashMapArray;

    if(entriesInHashMap > maxSize){
      console.log("TRUE");
      let newBucket = Array.from({length: doubleSizeOfBucket}, (x) => x); // This part needs to add the items from the old linkedlist (bucket) to new linkedList (bucket);
      console.log(`New Bucket Length: ${newBucket.length}`);
      this.hashMapArray = newBucket;
      console.log(this.hashMapArray);

      return true;
    }else{
      console.log("FALSE");
    }




    
    return oldBucket;
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

let test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('carlos', 'hey')
test.set('carla', 'HEYYY');
test.set('Something', 'Else');
test.set('We', 'Here');
test.set('Dont', 'lol');

test.set('Somewhere', 'lol');

test.set('LMAOOOOO', 'lol');
