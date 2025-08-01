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
      messages: [{}, {}, {}, {}, {}],
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
      messages: [
        {
          content: 'Hello!',
          context: 'context',
          createdAt: 'createdAt',
          externalMessageId: 'user-msg-1',
          input: { foo: 'bar' },
          messageType: 'user_message',
          metadata: { foo: 'bar' },
          modelOverride: 'modelOverride',
          output: { foo: 'bar' },
          parentExternalMessageId: 'parentExternalMessageId',
          parentMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          role: 'user',
          systemPromptOverride: 'x',
          toolName: 'toolName',
        },
        {
          content: 'Hi there! How can I help you?',
          context: 'context',
          createdAt: 'createdAt',
          externalMessageId: 'assistant-msg-1',
          input: { foo: 'bar' },
          messageType: 'user_message',
          metadata: { foo: 'bar' },
          modelOverride: 'modelOverride',
          output: { foo: 'bar' },
          parentExternalMessageId: 'parentExternalMessageId',
          parentMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          role: 'assistant',
          systemPromptOverride: 'x',
          toolName: 'toolName',
        },
        {
          content: 'Calling search tool',
          context: 'context',
          createdAt: 'createdAt',
          externalMessageId: 'tool-call-1',
          input: { query: 'bar' },
          messageType: 'tool_call',
          metadata: { foo: 'bar' },
          modelOverride: 'modelOverride',
          output: { foo: 'bar' },
          parentExternalMessageId: 'parentExternalMessageId',
          parentMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          role: 'user',
          systemPromptOverride: 'x',
          toolName: 'web_search',
        },
        {
          content: 'Search completed',
          context: 'context',
          createdAt: 'createdAt',
          externalMessageId: 'tool-result-1',
          input: { foo: 'bar' },
          messageType: 'observation',
          metadata: { foo: 'bar' },
          modelOverride: 'modelOverride',
          output: { results: 'bar' },
          parentExternalMessageId: 'tool-call-1',
          parentMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          role: 'user',
          systemPromptOverride: 'x',
          toolName: 'toolName',
        },
        {
          content: 'Based on the search, today will be sunny with a high of 75°F.',
          context: 'context',
          createdAt: 'createdAt',
          externalMessageId: 'final-1',
          input: { foo: 'bar' },
          messageType: 'final_response',
          metadata: { foo: 'bar' },
          modelOverride: 'modelOverride',
          output: { foo: 'bar' },
          parentExternalMessageId: 'parentExternalMessageId',
          parentMessageId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          role: 'user',
          systemPromptOverride: 'x',
          toolName: 'toolName',
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
