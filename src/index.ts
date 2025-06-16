import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const { httpMethod, path, pathParameters } = event

    if (path === '/items' && httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'GET /items' }),
        }
    }

    if (path === '/items' && httpMethod === 'POST') {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'POST /items' }),
        }
    }

    if (path?.startsWith('/items/') && pathParameters?.id) {
        const id = pathParameters.id

        if (httpMethod === 'GET') {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: `GET /items/${id}` }),
            }
        }

        if (httpMethod === 'PUT') {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: `PUT /items/${id}` }),
            }
        }

        if (httpMethod === 'DELETE') {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: `DELETE /items/${id}` }),
            }
        }
    }

    return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Not Found' }),
    }
}
