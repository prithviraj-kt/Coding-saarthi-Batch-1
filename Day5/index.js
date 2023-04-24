// Array Methods

var arr = [5, 4, 3, 2, 1];

var arr2 = [10, 20, 30, 40, 50];

var str = ["a", "b", "c"];

console.log(arr.indexOf(3));

console.log(arr.includes(5));

var concatinatedArray = arr.concat(arr2);
console.log(concatinatedArray);

console.log(arr);

for (var num in arr) {
  console.log(num);
}

for (var stringName of str) {
  console.log(stringName);
}

var sortedArray = arr.sort();

for (var num of sortedArray) {
  console.log(num);
}

arr.push(20);

console.log(arr);

arr.pop();

console.log(arr);

console.log(arr.length);

// Dictionary Methods

var myDictionary = {
  name: "Prithviraj",
  age: 22,
  clg: "KLEIT",
};

console.log(myDictionary.name);

myDictionary["email"] = "xyz@gmail.com";

for (var key in myDictionary) {
  console.log(myDictionary[key]);
}

var students = [
  {
    name: "Prithviraj",
    age: 22,
    clg: "KLEIT",
    branch: "CSE",
    email: [
      {
        emailName: "abc@gmail.com",
      },
      {
        emailName: "xya@gmail.com",
      },
    ],
  },
  {
    name: "King",
    age: 22,
    clg: "KLEIT",
    branch: "ECE",
  },
  {
    name: "Abhishek",
    age: 22,
    clg: "KLEIT",
    branch: "MCA",
  },
];

console.log(myDictionary.name);