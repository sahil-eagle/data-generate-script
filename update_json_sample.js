const fs = require("fs");
// var acquisitionObj = JSON.parse(fs.readFileSync("customer_acquisition_details.json", "utf-8"));
// var sampleAcquisitionObj = JSON.parse(fs.readFileSync("sample_data_customer_acquisition_details.json", "utf-8"));

// function renameKeys(obj, newKeys) {
//     const keyValues = Object.keys(obj).map(key => {
//       const newKey = newKeys[key] || key;
//       return { [newKey]: obj[key] };
//     });
//     return Object.assign({}, ...keyValues);
//   }

// acquisitionObj.map(key => {
//     key["acquisitionSource"] = key["acquisitionSource"]
//     key["acquisitionTimestamp"] = key["acqisitionTimestamp"]
//     delete key["acqisitionTimestamp"]
//     delete key["acquisitionSource"]
// })

// sampleAcquisitionObj.map(key => {
//     key["acquisitionSource"] = key["acquisitionSource"]
//     key["acquisitionTimestamp"] = key["acqisitionTimestamp"]
//     delete key["acqisitionTimestamp"]
//     delete key["acquisitionSource"]
// })

// var sampleJsonAcquisition = JSON.stringify(sampleAcquisitionObj) //JSON to string
// fs.writeFile('./sample_data_customer_acquisition_details.json', sampleJsonAcquisition, 'utf-8' ,(err) => {
//     if(err){console.log(err);}
// })
// var jsonAcquisition = JSON.stringify(acquisitionObj) //JSON to string
// fs.writeFile('./customer_acquisition_details.json', jsonAcquisition, 'utf-8' ,(err) => {
//     if(err){console.log(err);}
// })


var electricityObj = JSON.parse(fs.readFileSync("electricity_details_mpan.json", "utf-8"));
electricityObj.map(key => {
    Object.keys(key).map(eachKey => {
        key["gsi2Pk"] = "registrationStatus#" + key["registrationStatus"]
        key["gsi2Sk"] = key["supplyStartDate"]
    })
    
})

console.log(electricityObj);