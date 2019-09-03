 class HashMap{
  constructor(init=8){
    this.length = 0;
    this._table = [];
    this._capacity = init;
    this._deleted = 0;
  }
  set(key,value){
    let DELETED = false;
    const loadRatio = (this.length + this._deleted + 1)/this.capacity;
    if(loadRatio > HashMap.MAX_LOAD_RATIO){
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);
    if(!this._table[index])
      this.length++;
    this._table[index] = {key,value,DELETED};
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i=start; i<start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._table[index];
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
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
    
  }
}

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;