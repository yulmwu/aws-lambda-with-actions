import { APIGatewayProxyEventV2, APIGatewayProxyResult } from 'aws-lambda'

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResult> => {
    const method = event.requestContext.http.method
    const path = event.rawPath

    if (method === 'GET' && path === '/') {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Hello from /' }),
        }
    }

    return {
        statusCode: 404,
        body: JSON.stringify({ message: `Not found: ${method} ${path}` }),
    }
}
