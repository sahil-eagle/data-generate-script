// Load the AWS SDK for Node.js
// const AWS = require('aws-sdk');
const attr = require('dynamodb-data-types').AttributeValue;
// Set the region
// AWS.config.update({ region: 'eu-west-2' });
let data = require(process.argv[2]);
// Create DynamoDB service object
// var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10'});
let items = [];
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    // Format element in the correct format for DynamoDB's API 
    let item = {
        PutRequest: {
            Item: attr.wrap(element)
        }
    };
    items.push(item);   
    console.log(item);
    items = [];
}