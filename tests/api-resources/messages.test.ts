// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import GreenflashPublicAPI from 'greenflash-public-api';

const client = new GreenflashPublicAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.messages.create({
      externalUserId: 'user-123',
      turns: [
        {
          messages: [
            { content: 'Hello!', contentType: 'text', messageIndex: 0, role: 'user' },
            { content: 'Hi there!', contentType: 'text', messageIndex: 1, role: 'assistant' },
          ],
          turnIndex: 0,
        },
      ],
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
  test.skip('create: required and optional params', async () => {
    const response = await client.messages.create({
      externalUserId: 'user-123',
      turns: [
        {
          messages: [
            {
              content: 'Hello!',
              contentType: 'text',
              messageIndex: 0,
              role: 'user',
              context: 'context',
              createdAt: '2019-12-27T18:11:19.117Z',
              metadata: { foo: 'bar' },
              tokens: 1,
            },
            {
              content: 'Hi there!',
              contentType: 'text',
              messageIndex: 1,
              role: 'assistant',
              context: 'context',
              createdAt: '2019-12-27T18:11:19.117Z',
              metadata: { foo: 'bar' },
              tokens: 2,
            },
          ],
          turnIndex: 0,
          createdAt: '2019-12-27T18:11:19.117Z',
          metadata: { foo: 'bar' },
          modelOverride: 'modelOverride',
          systemPromptOverride: 'You are a helpful assistant.',
        },
      ],
      conversationId: 'conversationId',
      externalConversationId: 'conv-456',
      metadata: { source: 'bar' },
      model: 'gpt-greenflash-1',
      productId: 'prod-789',
      projectId: 'proj-001',
      systemPrompt: {
        components: [
          {
            content: 'You are a helpful assistant.',
            source: 'customer',
            type: 'system',
            isDynamic: true,
            name: 'name',
            tags: ['string'],
            version: 0,
          },
        ],
        externalTemplateId: 'externalTemplateId',
        templateId: 'tmpl-001',
      },
      versionId: 'ver-001',
    });
  });
});
