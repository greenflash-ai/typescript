// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Greenflash from 'greenflash-public-api';

const client = new Greenflash({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversions', () => {
  // skipped: tests are disabled for the time being
  test.skip('log: only required params', async () => {
    const responsePromise = client.conversions.log({
      action: 'purchase',
      externalUserId: 'user-123',
      value: '99.99',
      valueType: 'currency',
    });
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
    const response = await client.conversions.log({
      action: 'purchase',
      externalUserId: 'user-123',
      value: '99.99',
      valueType: 'currency',
      conversationId: '123e4567-e89b-12d3-a456-426614174000',
      convertedAt: '2025-07-09T09:15:00Z',
      externalConversationId: 'conv-456',
      metadata: { sku: 'bar' },
      productId: '123e4567-e89b-12d3-a456-426614174000',
      projectId: '123e4567-e89b-12d3-a456-426614174000',
    });
  });
});
