//Ex1
/*
const testNum = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve(number + " gretertan 10");
        } else {
            reject(number + " lesthan 10");
        }
    });
};
console.log(testNum("11"));
console.log(testNum("8"));
*/

//Ex2
//const arrayOfWords = ["cucumber", "tomatos", "avocado"];
//const complicatedArray = ["cucumber", 44, true];
const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (
            words.every((word) => {
                return typeof word === "string";
            })
        ) {
            resolve(
                sortWords(
                    words.map((word) => {
                        return word.toUpperCase();
                    })
                )
            );
        } else {
            reject("not");
        }
    });
};

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort());
        } else {
            reject("string only");
        }
    });
};
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then((result) => console.log(result))
    .catch((error) => console.error());

const complicatedArray = ["cucumber", 44, true];
makeAllCaps(complicatedArray)
    .then(sortWords(complicatedArray))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

console.log(makeAllCaps(arrayOfWords));
console.log(makeAllCaps(complicatedArray));