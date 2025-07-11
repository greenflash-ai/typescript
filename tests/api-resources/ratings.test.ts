// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GreenflashAPI from 'greenflash-public-api';

const client = new GreenflashAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ratings', () => {
  // skipped: tests are disabled for the time being
  test.skip('log: only required params', async () => {
    const responsePromise = client.ratings.log({ rating: 4, ratingMax: 5, ratingMin: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('log: required and optional params', async () => {
    const response = await client.ratings.log({
      rating: 4,
      ratingMax: 5,
      ratingMin: 1,
      conversationId: '123e4567-e89b-12d3-a456-426614174000',
      externalConversationId: 'externalConversationId',
      feedback: 'Helpful response!',
      messageId: 'msg-001',
      ratedAt: '2025-07-09T09:00:00Z',
    });
  });
});
