// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Greenflash from 'greenflash';

const client = new Greenflash({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ratings', () => {
  test('log: only required params', async () => {
    const responsePromise = client.ratings.log({
      productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      rating: 4,
      ratingMax: 5,
      ratingMin: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('log: required and optional params', async () => {
    const response = await client.ratings.log({
      productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      rating: 4,
      ratingMax: 5,
      ratingMin: 1,
      conversationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      externalConversationId: '123e4567-e89b-12d3-a456-426614174000',
      externalMessageId: 'externalMessageId',
      feedback: 'Helpful response!',
      messageId: 'messageId',
      ratedAt: '2019-12-27',
    });
  });
});
