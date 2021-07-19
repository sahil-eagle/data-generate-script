//sk = emeter
//generating the data from https://www.generatedata.com
var fs = require("fs"); //file reading library
var meterObj = JSON.parse(fs.readFileSync("emeter.json", "utf-8"));
meterObj.map((key) => {
  Object.keys(key).map(eachKey => {
    if (eachKey === "pk") {
      key[eachKey] = key[eachKey] + key["mpan"]
    }
  })
})

var jsonMeter = JSON.stringify(meterObj) // coverting javascript object into string for writng it to a file
fs.writeFile('./sample_data_emeter.json', jsonMeter, 'utf-8' ,(err) => { //writing it to a different file
    console.log(err);
})

// sk = CustomerDetails
//generating the data from https://www.generatedata.com
var customerObj = JSON.parse(fs.readFileSync("customer_details.json", "utf-8"));
var tempCustomerEmails = [];
customerObj.map((key) => {
  Object.keys(key).map((eachKey) => {
    if (eachKey === "email") {
      tempCustomerEmails.push(key[eachKey])
    } else if(eachKey === "pk") {
      key[eachKey] = key[eachKey] + key["email"]
    }
    key["gsi1Pk"] = "phoneNumber#" + key["phoneNumber"]
    key["gsi1Sk"] = "Static"
  })
})

var jsonCustomer = JSON.stringify(customerObj) //JSON to string
fs.writeFile('./sample_data_customer_details.json', jsonCustomer, 'utf-8' ,(err) => {
    if(err){console.log(err);}
})


//sk = CustomerAcquisitionDetails
//generating the data from https://www.generatedata.com
var acquisitionObj = JSON.parse(fs.readFileSync("customer_acquisition_details.json", "utf-8"));
acquisitionObj.map((key, idx) => {
  Object.keys(key).map((eachKey) => {
    if(eachKey === "pk") {
      key[eachKey] = key[eachKey] + tempCustomerEmails[idx]
    }
  })
})

var jsonAcquisition = JSON.stringify(acquisitionObj) //JSON to string
fs.writeFile('./sample_data_customer_acquisition_details.json', jsonAcquisition, 'utf-8' ,(err) => {
    if(err){console.log(err);}
})

// sk = ElectricityDetails#mpan
//generating the data from https://www.generatedata.com
var obj = JSON.parse(fs.readFileSync("electricity_details_mpan.json", "utf-8")); //reading the file electricity_details_mpan document and converting it into JSON readable
var tempMpan = [];
var tempMeterType = [];
meterObj.map((key) => {
  Object.keys(key).map((eachKey) => {
    if (eachKey === "mpan") {
      tempMpan.push(key[eachKey])
    } else if(eachKey === "meterType")[
      tempMeterType.push(key[eachKey])
    ]
  })
})

var tempAcquisitionSource = [];
acquisitionObj.map((key) => {
  Object.keys(key).map((eachKey) => {
    if (eachKey === "acquisitionSource"){
      tempAcquisitionSource.push(key[eachKey])
    }
  })
})

console.log(tempAcquisitionSource);

obj.map((key, idx) => { // appling array map function as the parsed json is in single array format, key represent every objects
  Object.keys(key).map((eachKey) => { //looping through every object, eachKey represent the key of {key-value} pair
    if (eachKey === "pk") { // checking pk of every object because we have to append User# to every pk of this document
      key[eachKey] = key[eachKey] + tempCustomerEmails[idx];
    } else if (eachKey === "sk") { //checking sk of every object because we have to append mpan to ElectricityDetails#
      key[eachKey] = key[eachKey] + tempMpan[idx];
    } else if (eachKey === "meterType"){
      key[eachKey] = tempMeterType[idx]
    } else if (eachKey === "mpan"){
      key[eachKey] = tempMpan[idx]
    } else if (eachKey === "acquisitionSource") {      
      key[eachKey] = tempAcquisitionSource[idx]
      console.log(tempAcquisitionSource[idx]);
    }
    key["gsi1Pk"] = "mpan#" + key["mpan"];
    key["gsi1Sk"] = "Static";
    key["gsi2Pk"] = "registrationStatus#" + key["registrationStatus"]
    key["gsi2Sk"] = key["supplyStartDate"]
  });
});

var jsonElectricityDetails = JSON.stringify(obj) // coverting javascript object into string for writng it to a file
fs.writeFile('./sample_data_electricity_details_mpan.json', jsonElectricityDetails, 'utf-8' ,(err) => { //writing it to a different file
    console.log(err);
})
