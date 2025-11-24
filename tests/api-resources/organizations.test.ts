// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Greenflash from 'greenflash';

const client = new Greenflash({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource organizations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.organizations.create({ externalOrganizationId: 'org-456' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.organizations.create({
      externalOrganizationId: 'org-456',
      name: 'Acme Corporation',
      properties: { industry: 'bar', size: 'bar' },
    });
  });

  test('update', async () => {
    const responsePromise = client.organizations.update('organizationId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.organizations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.list({ limit: 1, offset: 0, page: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Greenflash.NotFoundError);
  });

  test('getOrganizationAnalytics', async () => {
    const responsePromise = client.organizations.getOrganizationAnalytics(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getOrganizationAnalytics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.organizations.getOrganizationAnalytics(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          mode: 'simple',
          productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          versionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Greenflash.NotFoundError);
  });
});
