let HashMap = require('./hashMap');


function main(){
  let lor = new HashMap();
  let testData = [{'Hobbit': 'Bilbo'}, {'Hobbit': 'Frodo'},
    {'Wizard': 'Gandolf'}, {'Human': 'Aragon'}, {'Elf': 'Legolas'}, {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'}, {'RingBearer': 'Gollum'}, {'LadyOfLight': 'Galadriel'}, {'HalfElven': 'Arwen'},
    {'Ent': 'Treebeard'}];
  testData.forEach((obj)=>lor.set(Object.keys(obj)[0],obj[Object.keys(obj)[0]]));
  console.log(lor);
  removeDuplicates('google all that you think can think of');
}
main();



/* HashMap {
  length: 9,
  _table:
   [ <2 empty items>,
     { key: 'HalfElven', value: 'Arwen', DELETED: false },
     <1 empty item>,
     { key: 'LadyOfLight', value: 'Galadriel', DELETED: false },
     <1 empty item>,
     { key: 'Wizard', value: 'Gandolf', DELETED: false },
     { key: 'RingBearer', value: 'Gollum', DELETED: false },
     <4 empty items>,
     { key: 'Elf', value: 'Legolas', DELETED: false },
     { key: 'Hobbit', value: 'Frodo', DELETED: false },
     <6 empty items>,
     { key: 'Ent', value: 'Treebeard', DELETED: false },
     <1 empty item>,
     { key: 'Human', value: 'Aragon', DELETED: false },
     { key: 'Maiar', value: 'Sauron', DELETED: false } ],
  _capacity: 24,
  _deleted: 0 } */

//{ key: 'Maiar', value: 'Sauron', DELETED: false } ],  { key: 'Hobbit', value: 'Frodo', DELETED: false },

//the other two where overwritten because they used the same key

//capcity is 24 becuse 8 * 3 = 24

//#4 remove duplicates

function removeDuplicates(str){
  let results ='';
  let map = new HashMap();
  for(let x = 0;x < str.length;x++)
  {
    map.set(str[x],str[x]);
  }
  for(let x = 0;x < str.length;x++)
  { try{
    results += map.get(str[x]);
    map.delete(str[x]);
  }
  catch(key){
  }
  }

  console.log(results);
  return results;
}