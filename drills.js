let HashMap = require('./hashMap');

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

function main(){
  // let lor = new HashMap();
  // let testData = [{'Hobbit': 'Bilbo'}, {'Hobbit': 'Frodo'},
  //   {'Wizard': 'Gandolf'}, {'Human': 'Aragon'}, {'Elf': 'Legolas'}, {'Maiar': 'The Necromancer'},
  //   {'Maiar': 'Sauron'}, {'RingBearer': 'Gollum'}, {'LadyOfLight': 'Galadriel'}, {'HalfElven': 'Arwen'},
  //   {'Ent': 'Treebeard'}];
  // testData.forEach((obj)=>lor.set(Object.keys(obj)[0],obj[Object.keys(obj)[0]]));
  // console.log(lor);
  //removeDuplicates('google all that you think can think of');
  //console.log(lor);
  //WhatDoesThisDo();
  console.log(palindromeChecker('north'));
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
// ===== 2. WhatDoesThisDo =====

// In the first HashMap, 20 replaces 10 because the key 
// 'Hello World' is the same.  In the second HashMap, 
// 10 replaces 20, because we don't have any collision
// handling in place.

// ===== 3. Demonstrate understanding of Hash maps =====
// See images

// ===== 5. Any permutation a palindrome =====
// Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.

// racecar  -> 2 r's, 2 a's, 2 c's, 1 e
// palindrome - 2 of every letter, except 1?
// colision handling = linked lists/separate chaining

function palindromeChecker(string) {
  // put each letter into hash map
  let palindromeMap = new HashMap();
  palindromeMap.fromString(string);

  //console.log(palindromeMap);
  // check for a LinkedList by index 3 or else not a palindrome
  let foundSingleLetter = false;
  for (let i = 0; i < string.length; i++) {
    if (palindromeMap.get(string[i]).head === undefined) {
      if (!foundSingleLetter) {
        foundSingleLetter = true;
      }
      else {
        return false;
      }
    }
  }
  return true;
}