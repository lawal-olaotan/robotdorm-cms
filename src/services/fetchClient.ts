
type sanityPostPayload = {
  query: string,
}

enum requestType {
  POST = 'POST',
  GET = 'GET',
}

/**
 * This method is used to send a POST request to the Sanity API with the provided query and return the response as a JSON object.
 * @param url
 * @param payload
 */
export const requestClient = async (url:string, payload:sanityPostPayload) => {

  try{
    const response = await fetch(url, {
      method: requestType.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return await response.json();
  }catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }

}
