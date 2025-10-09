// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Messages extends APIResource {
  /**
   * Record conversations between your users and AI, supporting both simple chat and
   * complex agentic workflows.
   *
   * **Simple Chat:** Use `role` with values like "user", "assistant", or "system"
   * for basic conversations.
   *
   * **Agentic Workflows:** Use `messageType` for complex scenarios including tool
   * calls, thoughts, observations, and more.
   *
   * **Message Ordering:** Messages are stored with sequential timestamps. You can
   * provide explicit `createdAt` timestamps for historical data.
   *
   * **Message Threading:** Reference parent messages using `parentMessageId`
   * (internal ID) or `parentExternalMessageId` (your external ID) to create threaded
   * conversations.
   *
   * **User Organization:** Optionally provide an `externalOrganizationId` to
   * associate the user with an organization. If the organization doesn't exist, it
   * will be created automatically.
   *
   * The simplest way to log a message is to provide the `role` and `content` along
   * with an `externalConversationId` and your `productId`.
   *
   * For agentic workflows, include structured data via `input`/`output` fields, tool
   * names for `tool_call` messages, and various message types to represent the full
   * execution trace.
   *
   * @example
   * ```ts
   * const createMessageResponse = await client.messages.create({
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
   *   externalOrganizationId: 'org-789',
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
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<CreateMessageResponse> {
    return this._client.post('/messages', { body, ...options });
  }
}

/**
 * Request payload for logging conversations and messages.
 */
export interface CreateMessageParams {
  /**
   * Your external user ID that will be mapped to a participant in our system.
   */
  externalUserId: string;

  /**
   * Array of conversation messages.
   */
  messages: Array<MessageItem>;

  /**
   * The Greenflash conversation ID. When provided, updates an existing conversation
   * instead of creating a new one. Either conversationId, externalConversationId,
   * productId, or projectId must be provided.
   */
  conversationId?: string;

  /**
   * Your external identifier for the conversation. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  externalConversationId?: string;

  /**
   * Your unique identifier for the organization this user belongs to. If provided,
   * the user will be associated with this organization.
   */
  externalOrganizationId?: string;

  /**
   * Additional data about the conversation.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The AI model used for the conversation.
   */
  model?: string;

  /**
   * The Greenflash product this conversation belongs to. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  productId?: string;

  /**
   * The Greenflash project this conversation belongs to. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  projectId?: string;

  /**
   * System prompt for the conversation. Can be a simple string or a template object
   * with components.
   */
  systemPrompt?: SystemPrompt;

  /**
   * The product version ID.
   */
  versionId?: string;
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
   * The template ID used internally to track the system prompt template.
   */
  systemPromptTemplateId: string;
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
   * Additional data about the message.
   */
  metadata?: { [key: string]: unknown };

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
     * Your external identifier for the template.
     */
    externalTemplateId?: string;

    /**
     * The Greenflash template ID.
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
       * The Greenflash component ID.
       */
      componentId?: string;

      /**
       * Your external identifier for the component.
       */
      externalComponentId?: string;

      /**
       * Whether the component content changes dynamically.
       */
      isDynamic?: boolean;

      /**
       * Component name.
       */
      name?: string;

      /**
       * Component source: customer, participant, greenflash, or agent. Defaults to
       * customer.
       */
      source?: 'customer' | 'participant' | 'greenflash' | 'agent';

      /**
       * Component type: system, endUser, userModified, rag, or agent. Defaults to
       * system.
       */
      type?: 'system' | 'endUser' | 'userModified' | 'rag' | 'agent';

      /**
       * Component version number.
       */
      version?: number;
    }
  }
}

export interface MessageCreateParams {
  /**
   * Your external user ID that will be mapped to a participant in our system.
   */
  externalUserId: string;

  /**
   * Array of conversation messages.
   */
  messages: Array<MessageItem>;

  /**
   * The Greenflash conversation ID. When provided, updates an existing conversation
   * instead of creating a new one. Either conversationId, externalConversationId,
   * productId, or projectId must be provided.
   */
  conversationId?: string;

  /**
   * Your external identifier for the conversation. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  externalConversationId?: string;

  /**
   * Your unique identifier for the organization this user belongs to. If provided,
   * the user will be associated with this organization.
   */
  externalOrganizationId?: string;

  /**
   * Additional data about the conversation.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The AI model used for the conversation.
   */
  model?: string;

  /**
   * The Greenflash product this conversation belongs to. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  productId?: string;

  /**
   * The Greenflash project this conversation belongs to. Either conversationId,
   * externalConversationId, productId, or projectId must be provided.
   */
  projectId?: string;

  /**
   * System prompt for the conversation. Can be a simple string or a template object
   * with components.
   */
  systemPrompt?: SystemPrompt;

  /**
   * The product version ID.
   */
  versionId?: string;
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
