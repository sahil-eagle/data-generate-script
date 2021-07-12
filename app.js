// sk = ElectricityDetails#mpan
//generating the data from https://www.generatedata.com
var fs = require("fs"); //file reading library
var obj = JSON.parse(fs.readFileSync("electricity_details_mpan.json", "utf-8")); //reading the file electricity_details_mpan document and converting it into JSON readable

obj.map((key) => { // appling array map function as the parsed json is in single array format, key represent every objects
  Object.keys(key).map((eachKey) => { //looping through every object, eachKey represent the key of {key-value} pair
    if (eachKey === "pk") { // checking pk of every object because we have to append User# to every pk of this document
      key[eachKey] = "User#" + key[eachKey];
    } else if (eachKey === "sk") { //checking sk of every object because we have to append mpan to ElectricityDetails#
      key[eachKey] = key[eachKey] + key["mpan"];
    }
  });
});

// console.log(obj);
var json = JSON.stringify(obj) // coverting javascript object into string for writng it to a file
fs.writeFile('./sample_data_electricity_details_mpan.json', json, 'utf-8' ,(err) => { //writing it to a different file
    console.log(err);
})

// sk = CustomerDetails
//generating the data from https://www.generatedata.com
var fs = require("fs");
var cusomerObj = JSON.parse(fs.readFileSync("customer_details.json", "utf-8"));
var electricityObj = JSON.parse(
  fs.readFileSync("sample_data_electricity_details_mpan.json", "utf-8")
); //reading data from electricity_details_mpan because
// need to make sure pk of both documents are same for every object

tempArr = []; //creating a temporary array to store all email of CustomerDetails
cusomerObj.map((key) => {
  Object.keys(key).map((eachKey) => {
    if (eachKey === "customerEmail") { //checking and pushing email into tempArr
      tempArr.push(key[eachKey]);
    }
  });
});

// need to replace pk of ElectricityDetails#mpan document with pk of CustomerDetails document
electricityObj.map((key, idx) => {
  Object.keys(key).map((eachKey) => {
    if (eachKey === "pk") {
      key[eachKey] = "User#" + tempArr[idx]; // replacing pk with email stored in tempArr (CustomerDetails emails) and adding prefix User# to it
    }
  })
})


// console.log(tempArr);
var json = JSON.stringify(electricityObj) //JSON to string
fs.writeFile('./sample_data_electricity_details_mpan.json', json, 'utf-8' ,(err) => {
    if(err){console.log(err);}
})
