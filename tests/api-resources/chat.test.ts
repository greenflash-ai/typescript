// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Greenflash from 'greenflash';

const client = new Greenflash({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource chat', () => {
  test('create: only required params', async () => {
    const responsePromise = client.chat.create({ question: 'What are the top complaints from enterprise customers this week?' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.chat.create({
    question: 'What are the top complaints from enterprise customers this week?',
    context: 'Focus on the Customer Support Bot product.',
    conversationId: 'conv-abc-123',
    messages: [{ content: 'Show me sentiment trends for the support bot.', role: 'user' }, { content: 'Based on the last 30 days, sentiment is trending slightly negative (-0.08). The main driver is billing-related frustration, which accounts for 34% of negative conversations.', role: 'assistant' }],
    productId: '123e4567-e89b-12d3-a456-426614174000',
  });
  });
});
