const LinkedList = require('./LinkedList');

class HashMap{
  constructor(init=8){
    this.length = 0;
    this._table = [];
    this._capacity = init;
    this._deleted = 0;
  }
  set(key,value){
    let DELETED = false;
    const loadRatio = (this.length + this._deleted + 1)/this._capacity;
    
    if(loadRatio > HashMap.MAX_LOAD_RATIO){
      
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);
    //if(!this._table[index]) {
      this.length++;
      this._table[index] = {key,value,DELETED};
    //}
    /* else {//somethings already there
      let data = this._table[index];
      this.length++;
      if(this._table[index].value.head === undefined){
        this._table[index] = {key: data.key, value: new LinkedList()};
        this._table[index].value.insertLast(data);
      }
      
      this._table[index].value.insertLast({key, value, DELETED});
    } */
    
  }
  get(key){
    let index = this._findSlot(key);
    if(this._table[index] === undefined)
      return undefined;
    return this._table[index].value;
  }
  delete(key){
    let index = this._findSlot(key);
    if(this._table[index] === undefined)
      throw new Error('Key Error');
    this._table[index].DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i=start; i<start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._table[index];
      if (slot === undefined || (!slot.DELETED)) {
        return index;
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      // shifting to left
      hash = (hash << 5) + hash + string.charCodeAt(i);
      // converting to 32 bit integer
      hash = hash & hash;
    }
    // making sure number is positive
    return hash >>> 0;
  }

  _resize(size) {
    let oldSlots = this._table;
    this._capacity = size;
    this.length = 0;//reset length
    this._deleted = 0;
    this._table = [];
    for(let slot of oldSlots){
      if( slot !== undefined && !slot.DELETED)
        this.set(slot.key, slot.value);
    }

  }

  fromString(string){
    for(let x = 0;x < string.length;x++)
    {
      this.set(string[x],string[x]);
    }
  }
}

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;