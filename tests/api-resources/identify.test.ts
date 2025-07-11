// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Greenflash from 'greenflash';

const client = new Greenflash({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource identify', () => {
  // skipped: tests are disabled for the time being
  test.skip('createOrUpdate: only required params', async () => {
    const responsePromise = client.identify.createOrUpdate({ externalUserId: 'user-123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createOrUpdate: required and optional params', async () => {
    const response = await client.identify.createOrUpdate({
      externalUserId: 'user-123',
      anonymized: false,
      email: 'alice@example.com',
      metadata: { plan: 'bar' },
      name: 'Alice Example',
      phone: '+15551234567',
    });
  });
});
