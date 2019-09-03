 class HashMap{
  constructor(init=8){
    this.length = 0;
    this._table = [];
    this.capacity = init;
    this._deleted = 0;
  }
  set(key,value){
    let DELETED = false;
    const loadRatio = (this.length + this._deleted + 1)/this.capacity;
    if(loadRatio > HashMap.MAX_LOAD_RATIO){
      this._resize(this.capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);
    if(!this._table[index])
      this.length++;
    this._table[index] = {key,value,DELETED};
  }
}

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

module.exports = HashMap;