// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Greenflash from 'greenflash';

const client = new Greenflash({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prompts', () => {
  test('create: only required params', async () => {
    const responsePromise = client.prompts.create({
      components: [
        { content: 'You are a helpful assistant for {{productName}}. Greet {{userName}} warmly.' },
      ],
      name: 'Customer Support Prompt',
      productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      role: 'x',
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
    const response = await client.prompts.create({
      components: [
        {
          content: 'You are a helpful assistant for {{productName}}. Greet {{userName}} warmly.',
          componentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          externalComponentId: 'externalComponentId',
          isDynamic: false,
          name: 'Base Instructions',
          source: 'customer',
          type: 'system',
        },
      ],
      name: 'Customer Support Prompt',
      productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      role: 'x',
      description: 'Standard customer support  prompt',
      externalPromptId: 'support-v1',
      source: 'customer',
    });
  });

  test('update', async () => {
    const responsePromise = client.prompts.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.prompts.list();
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
      client.prompts.list(
        {
          activeOnly: true,
          includeArchived: true,
          limit: 100,
          page: 1,
          pageSize: 1,
          productId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          versionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Greenflash.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.prompts.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.prompts.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
