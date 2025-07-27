// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Messages extends APIResource {
  /**
   * The `/messages` endpoint allows you to log messages between your users and your
   * products, supporting both simple chat scenarios and complex agentic workflows.
   *
   * **Simple Chat:** Use the `role` field with values like "user", "assistant", or
   * "system" for basic conversational AI.
   *
   * **Agentic Workflows:** Use the `messageType` field for complex scenarios
   * including tool calls, thoughts, observations, retrievals, and more.
   *
   * **Message Ordering:** Messages in the array will be stored with sequential
   * timestamps to preserve order. You can optionally provide explicit `createdAt`
   * timestamps for historical data import.
   *
   * **Message Threading:** Messages can reference parent messages using either
   * `parentMessageId` (internal ID) or `parentExternalMessageId` (your external ID)
   * to create threaded conversations.
   *
   * The simplest way to log a message is to pass the `role` and `content` of the
   * message to the API along with an `externalConversationId` for the conversation
   * and your `productId`.
   *
   * For agentic workflows, you can include structured data via `input`/`output`
   * fields, tool names for `tool_call` messages, and various message types to
   * represent the full execution trace.
   *
   * @example
   * ```ts
   * const createResponse = await client.messages.create({
   *   externalUserId: 'user-123',
   *   messages: [
   *     { externalMessageId: 'user-msg-1', role: 'user', content: 'Hello!' },
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
   *   metadata: { campaign: 'summer-sale' },
   *   model: 'gpt-greenflash-1',
   *   productId: '123e4567-e89b-12d3-a456-426614174001',
   *   projectId: '123e4567-e89b-12d3-a456-426614174002',
   *   systemPrompt: {
   *     templateId: '123e4567-e89b-12d3-a456-426614174004',
   *     components: [
   *       { ... },
   *     ],
   *   },
   *   versionId: '123e4567-e89b-12d3-a456-426614174003',
   * });
   * ```
   */
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<CreateResponse> {
    return this._client.post('/messages', { body, ...options });
  }
}

/**
 * Request payload for logging messages and conversations.
 */
export interface CreateParams {
  /**
   * The external user ID that will be mapped to a participant in our system.
   */
  externalUserId: string;

  /**
   * An array of conversation messages.
   */
  messages: Array<MessageItem>;

  /**
   * The conversation ID. When provided, this will update an existing conversation
   * instead of creating a new one. Either conversationId, externalConversationId,
   * productId, or projectId must be provided.
   */
  conversationId?: string;

  /**
   * Your own external identifier for the conversation. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  externalConversationId?: string;

  /**
   * Additional metadata for the conversation.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The AI model used for the conversation.
   */
  model?: string;

  /**
   * The ID of the product this conversation belongs to. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  productId?: string;

  /**
   * The ID of the project this conversation belongs to. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  projectId?: string;

  /**
   * System prompt for the conversation. Can be a simple string or a template object
   * with components.
   */
  systemPrompt?: SystemPrompt;

  /**
   * The ID of the product version.
   */
  versionId?: string;
}

/**
 * Success response for message logging operations.
 */
export interface CreateResponse {
  /**
   * The ID of the conversation that was created or updated.
   */
  conversationId: string;

  /**
   * The messages that were processed.
   */
  messages: Array<CreateResponse.Message>;

  /**
   * Indicates whether the API call was successful.
   */
  success: boolean;

  /**
   * The component IDs used internally to track the system prompt components.
   */
  systemPromptComponentIds: Array<string>;

  /**
   * The template ID used internally to track the system prompt template.
   */
  systemPromptTemplateId: string;
}

export namespace CreateResponse {
  export interface Message {
    /**
     * The internal ID of the message.
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
   * String content of the message. Required for language-based analyses.
   */
  content?: string;

  /**
   * Additional context (e.g., RAG data) used in generating the message.
   */
  context?: string;

  /**
   * When this message was created. If not provided, messages will be assigned
   * sequential timestamps to preserve order. If provided, this timestamp will be
   * used as-is (useful for importing historical data).
   */
  createdAt?: string;

  /**
   * Your own external identifier for this message. This can be used to reference the
   * message in other API calls.
   */
  externalMessageId?: string;

  /**
   * Structured input data for tool calls, retrievals, or other structured
   * operations.
   */
  input?: { [key: string]: unknown };

  /**
   * Detailed message type for agentic workflows. Cannot be used with role. Allowed
   * values: user_message, assistant_message, system_message, thought, tool_call,
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
   * Additional metadata for the message.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Override the conversation-level model for this specific message.
   */
  modelOverride?: string;

  /**
   * Structured output data from tool calls, retrievals, or other structured
   * operations.
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
   * Simple message role for basic chat scenarios. One of: 'user', 'assistant', or
   * 'system'. Cannot be used with messageType.
   */
  role?: 'user' | 'assistant' | 'system';

  /**
   * System prompt for the conversation. Can be a simple string or a template object
   * with components.
   */
  systemPromptOverride?: SystemPrompt;

  /**
   * Name of the tool being called. Required for tool_call messages.
   */
  toolName?: string;
}

/**
 * System prompt for the conversation. Can be a simple string or a template object
 * with components.
 */
export type SystemPrompt = string | SystemPrompt.SystemPromptTemplate;

export namespace SystemPrompt {
  /**
   * System prompt as a template object with components.
   */
  export interface SystemPromptTemplate {
    /**
     * Array of component objects.
     */
    components: Array<SystemPromptTemplate.Component>;

    /**
     * Your own external identifier for the template.
     */
    externalTemplateId?: string;

    /**
     * Array of string tags associated with the template.
     */
    tags?: Array<string>;

    /**
     * The ID of the template.
     */
    templateId?: string;
  }

  export namespace SystemPromptTemplate {
    export interface Component {
      /**
       * The content of the component.
       */
      content: string;

      /**
       * The ID of the component.
       */
      componentId?: string;

      /**
       * Your own external identifier for the component.
       */
      externalComponentId?: string;

      /**
       * Whether the component is dynamic.
       */
      isDynamic?: boolean;

      /**
       * Name of the component.
       */
      name?: string;

      /**
       * Source of the component. One of: 'customer', 'participant', 'greenflash',
       * 'agent'. Defaults to 'customer'.
       */
      source?: 'customer' | 'participant' | 'greenflash' | 'agent';

      /**
       * Array of string tags associated with the component.
       */
      tags?: Array<string>;

      /**
       * Type of the component. One of: 'system', 'endUser', 'userModified', 'rag',
       * 'agent'. Defaults to 'system'.
       */
      type?: 'system' | 'endUser' | 'userModified' | 'rag' | 'agent';

      /**
       * Version of the component.
       */
      version?: number;
    }
  }
}

export interface MessageCreateParams {
  /**
   * The external user ID that will be mapped to a participant in our system.
   */
  externalUserId: string;

  /**
   * An array of conversation messages.
   */
  messages: Array<MessageItem>;

  /**
   * The conversation ID. When provided, this will update an existing conversation
   * instead of creating a new one. Either conversationId, externalConversationId,
   * productId, or projectId must be provided.
   */
  conversationId?: string;

  /**
   * Your own external identifier for the conversation. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  externalConversationId?: string;

  /**
   * Additional metadata for the conversation.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The AI model used for the conversation.
   */
  model?: string;

  /**
   * The ID of the product this conversation belongs to. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  productId?: string;

  /**
   * The ID of the project this conversation belongs to. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  projectId?: string;

  /**
   * System prompt for the conversation. Can be a simple string or a template object
   * with components.
   */
  systemPrompt?: SystemPrompt;

  /**
   * The ID of the product version.
   */
  versionId?: string;
}

export declare namespace Messages {
  export {
    type CreateParams as CreateParams,
    type CreateResponse as CreateResponse,
    type MessageItem as MessageItem,
    type SystemPrompt as SystemPrompt,
    type MessageCreateParams as MessageCreateParams,
  };
}
