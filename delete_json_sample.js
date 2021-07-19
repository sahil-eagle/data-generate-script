const fs = require('fs');
var customerObj = JSON.parse(fs.readFileSync("customer_details.json", "utf-8"));
var electricityObj = JSON.parse(fs.readFileSync("electricity_details_mpan.json", "utf-8"));

customerObj.map(key => {
    Object.keys(key).map(eachKey => {
        delete key["addressState"]
        delete key["addressCity"]
    })
})

var jsonCustomer = JSON.stringify(customerObj) //JSON to string
fs.writeFile('./customer_details.json', jsonCustomer, 'utf-8' ,(err) => {
    if(err){console.log(err);}
})

electricityObj.map(key => {
    Object.keys(key).map(eachKey => {
        delete key["addressState"]
        delete key["addressCity"]
    })
})

var jsonElectricityDetails = JSON.stringify(electricityObj) //JSON to string
fs.writeFile('./electricity_details_mpan.json', jsonElectricityDetails, 'utf-8' ,(err) => {
    if(err){console.log(err);}
})


var sampleCustomerObj = JSON.parse(fs.readFileSync("sample_data_customer_details.json", "utf-8"));
var sampleElectricityObj = JSON.parse(fs.readFileSync("sample_data_electricity_details_mpan.json", "utf-8"));

sampleCustomerObj.map(key => {
    Object.keys(key).map(eachKey => {
        delete key["addressState"]
        delete key["addressCity"]
    })
})

sampleElectricityObj.map(key => {
    Object.keys(key).map(eachKey => {
        delete key["addressState"]
        delete key["addressCity"]
    })
})

var sampleJsonCustomer = JSON.stringify(customerObj) //JSON to string
fs.writeFile('./sample_data_customer_details.json', sampleJsonCustomer, 'utf-8' ,(err) => {
    if(err){console.log(err);}
})

var sampleJsonElectricityDetails = JSON.stringify(electricityObj) //JSON to string
fs.writeFile('./sample_data_electricity_details_mpan.json', sampleJsonElectricityDetails, 'utf-8' ,(err) => {
    if(err){console.log(err);}
})
