import { APIGatewayProxyResult } from "aws-lambda";
import { dynamo } from "./lib/dynamo";
import { v4 as uuid } from "uuid";
import { formatJSONResponse } from "./lib/apiGateway";

export const handler = async (event: APIGatewayProxyResult): Promise<APIGatewayProxyResult> => {
    try {
        const body = JSON.parse(event.body);
        const data = {
            ...body,
            personId: uuid()
        };
        // call write function from Library
        await dynamo.write(data, "PeopleTest");
        const response: APIGatewayProxyResult = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
              'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
            body: JSON.stringify({ message: 'Data has been created' })
          };
          return response;
    } catch(error){
        console.error('Unable to add item. Error JSON:', JSON.stringify(error, null, 2));
        const response: APIGatewayProxyResult = {
          statusCode: 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': 'OPTIONS,POST'
          },
          body: JSON.stringify({ message: 'Unable to add item' })
        };
        return response;
    }
};