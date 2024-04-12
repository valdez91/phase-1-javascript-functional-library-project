// 
 Inputs = (collection) => 
 (collection instanceof Array)? collection.slice() : Object.values(collection);

 myEach = (collection, callback) => {
  const newCollection = Inputs(collection);
  for (let idx = 0; idx < newCollection.length; idx++) {
    callback(newCollection[idx]);
  }
  return collection;
}

 myMap = (collection, callback) => {
  const newCollection = Inputs(collection);
  const newArr = [];
  for (let idx = 0; idx < newCollection.length; idx++) {
    newArr.push(callback(newCollection[idx]));
  }
  return newArr;
}

 myReduce = (collection, callback, acc) => {
  let newCollection = Inputs(collection);
  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }
  const len = newCollection.length;
  for (let i = 0; i < len; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
}

 myFind = (collection, predicate) => {
  const newCollection = Inputs(collection);
  for (let idx = 0; idx < newCollection.length; idx++) {
    if (predicate(newCollection[idx])) return newCollection[idx];
  }
  return undefined;
}

 myFilter = (collection, predicate) => {
  const newCollection = Inputs(collection);
  const newArr = [];
  for (let idx = 0; idx < newCollection.length; idx++) {
    if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
  }
  return newArr;
}

 mySize = (collection) => Inputs(collection).length;

// Array Functions

const myFirst = (arr, stop=false) => (stop)? arr.slice(0, stop) : arr[0];

const myLast = (arr, start=false) => (start)? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];

 mySortBy = (arr, callback) => {
  const newArr = [...arr];
  return newArr.sort((a, b) => {
    if (callback(a) > callback(b)) {
      return 1;
    } else if (callback(b) > callback(a)) {
      return -1;
    } else {
      return 0;
    }
  });
}

 unpack = (receiver, arr) => {
  for (let val of arr) {
    receiver.push(val);
  }
}

 myFlatten = (collection, shallow, newArr=[]) => {
  if (shallow) {
    for (let val of collection) {
      Array.isArray(val)? unpack(newArr, val) : newArr.push(val);
    }
  } else {
    for (let val of collection) {
      if (Array.isArray(val)) {
        myFlatten(val, false, newArr);
      } else {
        newArr.push(val);
      }
    }
  }
  return newArr;
}


 myKeys = (obj) => {
  const keys = [];
  for (let key in obj){
    keys.push(key);
  }
  return keys;
}

 myValues = (obj) => {
  const values = [];
  for (let key in obj){
    values.push(obj[key]);
  }
  return values;
}