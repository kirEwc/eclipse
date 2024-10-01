interface HttpRequest {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  url: string;
  headers?: Record<string, string>;  
  body?: any;
}

const ApiRequest = async ({ method, url, body, headers }: HttpRequest) => {

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,  
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  return response;
};

export default ApiRequest;
