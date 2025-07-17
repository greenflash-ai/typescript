// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Greenflash from 'greenflash';

const client = new Greenflash({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  test('create: only required params', async () => {
    const responsePromise = client.messages.create({
      externalUserId: 'user-123',
      turns: [
        {
          messages: [
            { content: 'Hello!', role: 'user' },
            { content: 'Hi there!', role: 'assistant' },
          ],
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

  test('create: required and optional params', async () => {
    const response = await client.messages.create({
      externalUserId: 'user-123',
      turns: [
        {
          messages: [
            {
              content: 'Hello!',
              role: 'user',
              contentType: 'text',
              context: 'context',
              createdAt: 'createdAt',
              messageIndex: 0,
              metadata: { foo: 'bar' },
              tokens: 1,
            },
            {
              content: 'Hi there!',
              role: 'assistant',
              contentType: 'text',
              context: 'context',
              createdAt: 'createdAt',
              messageIndex: 1,
              metadata: { foo: 'bar' },
              tokens: 2,
            },
          ],
          createdAt: 'createdAt',
          metadata: { foo: 'bar' },
          modelOverride: 'modelOverride',
          systemPromptOverride: 'You are a helpful assistant.',
          turnIndex: 0,
        },
      ],
      conversationId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      externalConversationId: 'conv-456',
      metadata: { campaign: 'bar' },
      model: 'gpt-greenflash-1',
      productId: '123e4567-e89b-12d3-a456-426614174001',
      projectId: '123e4567-e89b-12d3-a456-426614174002',
      systemPrompt: {
        components: [
          {
            content: 'You are a helpful assistant.',
            componentId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            externalComponentId: 'externalComponentId',
            isDynamic: true,
            name: 'name',
            source: 'customer',
            tags: ['string'],
            type: 'system',
            version: 0,
          },
        ],
        externalTemplateId: 'externalTemplateId',
        tags: ['string'],
        templateId: '123e4567-e89b-12d3-a456-426614174004',
      },
      versionId: '123e4567-e89b-12d3-a456-426614174003',
    });
  });
});
