// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Greenflash from 'greenflash';

const client = new Greenflash({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  test('create: only required params', async () => {
    const responsePromise = client.events.create({
      eventType: 'x',
      productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.events.create({
      eventType: 'x',
      productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      conversationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      eventAt: '2019-12-27',
      externalConversationId: 'externalConversationId',
      externalOrganizationId: 'externalOrganizationId',
      externalUserId: 'externalUserId',
      influence: 'positive',
      insertId: 'insertId',
      organizationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      properties: { foo: 'bar' },
      qualityImpactScore: -1,
      userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      value: 'value',
      valueType: 'currency',
    });
  });
});
