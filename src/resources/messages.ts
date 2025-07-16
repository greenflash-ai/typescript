// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Messages extends APIResource {
  /**
   * The `/messages` endpoint allows you to log messages between your users and your
   * products.
   *
   * Full conversations can be logged all at once in a single request with multiple
   * turns, or sequentially over multiple requests with a single turn per request.
   *
   * The simplest way to log a message is to pass the `role` and `content` of the
   * message to the API along with an `externalConversationId` for the converasation
   * and your `productId`.
   *
   * However, we recommend that you pass as much information about the conversation
   * as possible to allow you to analyze and optimize your prompts, models, and more.
   *
   * @example
   * ```ts
   * const createResponse = await client.messages.create({
   *   externalUserId: 'user-123',
   *   turns: [
   *     {
   *       turnIndex: 0,
   *       systemPromptOverride: 'You are a helpful assistant.',
   *       messages: [
   *         { ... },
   *         { ... },
   *       ],
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
   * An array of conversation turns, each containing messages exchanged during that
   * turn.
   */
  turns: Array<TurnItem>;

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

  /**
   * The turns that were processed, including their internal IDs.
   */
  turns: Array<CreateResponse.Turn>;
}

export namespace CreateResponse {
  export interface Turn {
    /**
     * The messages that were processed during this turn.
     */
    messages: Array<Turn.Message>;

    /**
     * The internal ID of the turn.
     */
    turnId: string;

    /**
     * The index of the turn in the conversation.
     */
    turnIndex: number;
  }

  export namespace Turn {
    export interface Message {
      /**
       * The internal ID of the message.
       */
      messageId: string;

      /**
       * The index of the message within the turn.
       */
      messageIndex: number;

      /**
       * The role of the message sender.
       */
      role: 'user' | 'assistant' | 'system';
    }
  }
}

export interface MessageItem {
  /**
   * The content of the message.
   */
  content: string;

  /**
   * The role of the message sender. Must be one of: 'user', 'assistant', or
   * 'system'.
   */
  role: 'user' | 'assistant' | 'system';

  /**
   * The type of content. One of: 'text', 'image', 'audio', or 'json'. Defaults to
   * 'text'.
   */
  contentType?: 'text' | 'image' | 'audio' | 'json';

  /**
   * Additional context for the message.
   */
  context?: string | null;

  /**
   * When this message was created.
   */
  createdAt?: string;

  /**
   * The index of the message within the turn. Inferred based on the location in the
   * array and previous records, but can be overridden here.
   */
  messageIndex?: number;

  /**
   * Additional metadata for the message.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The number of tokens in the message.
   */
  tokens?: number;
}

/**
 * System prompt for the conversation. Can be a simple string or a template object
 * with components.
 */
export type SystemPrompt = string | SystemPrompt.UnionMember1;

export namespace SystemPrompt {
  /**
   * System prompt as a template object with components.
   */
  export interface UnionMember1 {
    /**
     * Array of component objects.
     */
    components: Array<UnionMember1.Component>;

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

  export namespace UnionMember1 {
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

export interface TurnItem {
  /**
   * The messages exchanged during this turn.
   */
  messages: Array<MessageItem>;

  /**
   * When this turn was created.
   */
  createdAt?: string;

  /**
   * Additional metadata for this turn.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Override the conversation-level model for this specific turn.
   */
  modelOverride?: string;

  /**
   * System prompt for the conversation. Can be a simple string or a template object
   * with components.
   */
  systemPromptOverride?: SystemPrompt;

  /**
   * The index of the turn in the conversation sequence. Inferred based on the
   * location in the array and previous records, but can be overridden here.
   */
  turnIndex?: number;
}

export interface MessageCreateParams {
  /**
   * The external user ID that will be mapped to a participant in our system.
   */
  externalUserId: string;

  /**
   * An array of conversation turns, each containing messages exchanged during that
   * turn.
   */
  turns: Array<TurnItem>;

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
    type TurnItem as TurnItem,
    type MessageCreateParams as MessageCreateParams,
  };
}
