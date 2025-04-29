const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        if (event.httpMethod === 'POST') {
            const body = JSON.parse(event.body);
            const params = {
                TableName: 'ExampleTable',
                Item: {
                    id: body.id,
                    message: body.message
                }
            };
            await dynamoDB.put(params).promise();
            return {
                statusCode: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({ message: "آیتم اضافه شد!" })
            };
        } else {
            return {
                statusCode: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({ message: "Hello Nirvana Khoshgeleeeeeee!" })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({ error: error.message })
        };
    }
};