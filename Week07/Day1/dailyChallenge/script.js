function makeAllCaps(array) {
    return new Promise ((resolve,reject)=> {
        for (let item of array){
            if (typeof item !== 'string' )
                reject("Not all items in the array, are strings!")
        }
        const array2 = array.map((item) => item.toUpperCase());
        resolve(array2);
    });
}

function sortWords(array){
    return new Promise ((resolve,reject)=> {
        if (array.length <= 4)
            reject("Array is not big enough");
        else
            resolve(array.sort())
    });
}


//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))