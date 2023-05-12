export const formatJSONResponse = ({
     // accept an object as an argument
    statusCode = 200,
    data = {},
    headers,
  }: {  
    statusCode?: number;
    data?: any;
    // accept two keys both with a "string" value
    headers?: Record<string, string>;
  }) => {
    return {
      statusCode,
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Origin': '*',
          ...headers
      },
    };
  };
  