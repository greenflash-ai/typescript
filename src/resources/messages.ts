// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PromptsAPI from './prompts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Messages extends APIResource {
  /**
   * Send us your AI conversations so we can analyze them for you. Works with
   * everything from simple chatbots to complex agentic systems.
   *
   * **Getting Started (Simple Chat):** Just provide the `role` ("user", "assistant",
   * or "system") and `content` for each message, along with an
   * `externalConversationId` and your `productId`. That's it!
   *
   * **Advanced Usage (Agentic Workflows):** Capture the full execution trace of your
   * AI agents using `messageType` for tool calls, thoughts, observations, and more.
   * Include structured data via `input`/`output` fields to track what your agents
   * are doing.
   *
   * **Key Features:**
   *
   * - **Automatic Ordering:** Messages are stored with sequential timestamps, or
   *   provide your own `createdAt` timestamps for historical data.
   * - **Threading:** Create nested conversations by referencing parent messages
   *   using `parentMessageId` or `parentExternalMessageId`.
   * - **Organization Tracking:** Associate users with organizations via
   *   `externalOrganizationId`. We'll create the organization automatically if it
   *   doesn't exist.
   *
   * Perfect for understanding how your AI is performing in production and
   * identifying areas for improvement.
   *
   * @example
   * ```ts
   * const createMessageResponse = await client.messages.create({
   *   externalUserId: 'user-123',
   *   messages: [
   *     {
   *       externalMessageId: 'user-msg-1',
   *       role: 'user',
   *       content: 'Hello!',
   *     },
   *     {
   *       externalMessageId: 'assistant-msg-1',
   *       role: 'assistant',
   *       content: 'Hi there! How can I help you?',
   *     },
   *     {
   *       externalMessageId: 'tool-call-1',
   *       messageType: 'tool_call',
   *       content: 'Calling search tool',
   *       toolName: 'web_search',
   *       input: { ... },
   *     },
   *     {
   *       externalMessageId: 'tool-result-1',
   *       messageType: 'observation',
   *       content: 'Search completed',
   *       output: { ... },
   *       parentExternalMessageId: 'tool-call-1',
   *     },
   *     {
   *       externalMessageId: 'final-1',
   *       messageType: 'final_response',
   *       content: 'Based on the search, today will be sunny with a high of 75°F.',
   *     },
   *   ],
   *   externalConversationId: 'conv-456',
   *   externalOrganizationId: 'org-789',
   *   model: 'gpt-greenflash-1',
   *   productId: '123e4567-e89b-12d3-a456-426614174001',
   *   properties: { campaign: 'summer-sale' },
   *   systemPrompt: {
   *     promptId: '123e4567-e89b-12d3-a456-426614174004',
   *     components: [
   *       { ... },
   *     ],
   *   },
   * });
   * ```
   */
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<CreateMessageResponse> {
    return this._client.post('/messages', { body, ...options });
  }
}

/**
 * Request payload for logging conversations and messages.
 */
export interface CreateMessageParams {
  /**
   * Your external user ID that will be mapped to a user in our system.
   */
  externalUserId: string;

  /**
   * Array of conversation messages.
   */
  messages: Array<MessageItem>;

  /**
   * The Greenflash conversation ID. When provided, updates an existing conversation
   * instead of creating a new one. Either conversationId, externalConversationId,
   * productId must be provided.
   */
  conversationId?: string;

  /**
   * Your external identifier for the conversation. Either conversationId,
   * externalConversationId, productId must be provided.
   */
  externalConversationId?: string;

  /**
   * Your unique identifier for the organization this user belongs to. If provided,
   * the user will be associated with this organization.
   */
  externalOrganizationId?: string;

  /**
   * When true, bypasses sampling and ensures this request is always ingested
   * regardless of sampleRate. Use for critical conversations that must be captured.
   */
  forceSample?: boolean;

  /**
   * The AI model used for the conversation.
   */
  model?: string;

  /**
   * The Greenflash product this conversation belongs to. Either conversationId,
   * externalConversationId, productId must be provided.
   */
  productId?: string;

  /**
   * Additional data about the conversation.
   */
  properties?: { [key: string]: unknown };

  /**
   * Controls the percentage of requests that are ingested (0.0 to 1.0). For example,
   * 0.1 means 10% of requests will be stored. Defaults to 1.0 (all requests
   * ingested). Sampling is deterministic based on conversation ID.
   */
  sampleRate?: number;

  /**
   * System prompt for the conversation. Can be a simple string or a prompt object
   * with components.
   */
  systemPrompt?: string | SystemPrompt;
}

/**
 * Success response for message logging.
 */
export interface CreateMessageResponse {
  /**
   * The ID of the conversation that was created or updated.
   */
  conversationId: string;

  /**
   * The messages that were processed.
   */
  messages: Array<CreateMessageResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: boolean;

  /**
   * The component IDs used internally to track the system prompt components.
   */
  systemPromptComponentIds: Array<string>;

  /**
   * The prompt ID used internally to track the system prompt.
   */
  systemPromptPromptId: string;
}

export namespace CreateMessageResponse {
  export interface Message {
    /**
     * The internal Greenflash message ID.
     */
    messageId: string;

    /**
     * The type of the message that was created.
     */
    messageType: string;

    /**
     * Your external identifier for the message, if provided.
     */
    externalMessageId?: string;
  }
}

export interface MessageItem {
  /**
   * The message content. Required for language-based analyses.
   */
  content?: string;

  /**
   * Additional context (e.g., RAG data) used to generate the message.
   */
  context?: string | null;

  /**
   * When this message was created. If not provided, messages get sequential
   * timestamps. Use for importing historical data.
   */
  createdAt?: string;

  /**
   * Your external identifier for this message. Used to reference the message in
   * other API calls.
   */
  externalMessageId?: string;

  /**
   * Structured input data for tool calls, retrievals, or other operations.
   */
  input?: { [key: string]: unknown };

  /**
   * Detailed message type for agentic workflows. Cannot be used with role. Available
   * types: user_message, assistant_message, system_message, thought, tool_call,
   * observation, final_response, retrieval, memory_read, memory_write, chain_start,
   * chain_end, embedding, tool_error, callback, llm, task, workflow
   */
  messageType?:
    | 'user_message'
    | 'assistant_message'
    | 'system_message'
    | 'thought'
    | 'tool_call'
    | 'observation'
    | 'final_response'
    | 'retrieval'
    | 'memory_read'
    | 'memory_write'
    | 'chain_start'
    | 'chain_end'
    | 'embedding'
    | 'tool_error'
    | 'callback'
    | 'llm'
    | 'task'
    | 'workflow';

  /**
   * Structured output data from tool calls, retrievals, or other operations.
   */
  output?: { [key: string]: unknown };

  /**
   * The external ID of the parent message for threading. Cannot be used with
   * parentMessageId.
   */
  parentExternalMessageId?: string;

  /**
   * The internal ID of the parent message for threading. Cannot be used with
   * parentExternalMessageId.
   */
  parentMessageId?: string;

  /**
   * Custom message properties.
   */
  properties?: { [key: string]: unknown };

  /**
   * Simple message role for basic chat: user, assistant, or system. Cannot be used
   * with messageType.
   */
  role?: 'user' | 'assistant' | 'system';

  /**
   * Name of the tool being called. Required for tool_call messages.
   */
  toolName?: string;
}

/**
 * System prompt as a prompt object. Can reference an existing prompt by ID or
 * define new components inline.
 */
export interface SystemPrompt {
  /**
   * Array of component objects. When provided with promptId/externalPromptId, will
   * upsert the prompt. When omitted with promptId/externalPromptId, will reference
   * an existing prompt.
   */
  components?: Array<PromptsAPI.ComponentInput>;

  /**
   * Your external identifier for the prompt. Can be used to reference an existing
   * prompt created via system prompt APIs.
   */
  externalPromptId?: string;

  /**
   * Greenflash's internal prompt ID. Can be used to reference an existing prompt
   * created via system prompt APIs.
   */
  promptId?: string;
}

export interface MessageCreateParams {
  /**
   * Your external user ID that will be mapped to a user in our system.
   */
  externalUserId: string;

  /**
   * Array of conversation messages.
   */
  messages: Array<MessageItem>;

  /**
   * The Greenflash conversation ID. When provided, updates an existing conversation
   * instead of creating a new one. Either conversationId, externalConversationId,
   * productId must be provided.
   */
  conversationId?: string;

  /**
   * Your external identifier for the conversation. Either conversationId,
   * externalConversationId, productId must be provided.
   */
  externalConversationId?: string;

  /**
   * Your unique identifier for the organization this user belongs to. If provided,
   * the user will be associated with this organization.
   */
  externalOrganizationId?: string;

  /**
   * When true, bypasses sampling and ensures this request is always ingested
   * regardless of sampleRate. Use for critical conversations that must be captured.
   */
  forceSample?: boolean;

  /**
   * The AI model used for the conversation.
   */
  model?: string;

  /**
   * The Greenflash product this conversation belongs to. Either conversationId,
   * externalConversationId, productId must be provided.
   */
  productId?: string;

  /**
   * Additional data about the conversation.
   */
  properties?: { [key: string]: unknown };

  /**
   * Controls the percentage of requests that are ingested (0.0 to 1.0). For example,
   * 0.1 means 10% of requests will be stored. Defaults to 1.0 (all requests
   * ingested). Sampling is deterministic based on conversation ID.
   */
  sampleRate?: number;

  /**
   * System prompt for the conversation. Can be a simple string or a prompt object
   * with components.
   */
  systemPrompt?: string | SystemPrompt;
}

export declare namespace Messages {
  export {
    type CreateMessageParams as CreateMessageParams,
    type CreateMessageResponse as CreateMessageResponse,
    type MessageItem as MessageItem,
    type SystemPrompt as SystemPrompt,
    type MessageCreateParams as MessageCreateParams,
  };
}
