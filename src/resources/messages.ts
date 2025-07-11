// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Messages extends APIResource {
  /**
   * Create Conversations or Messages
   *
   * @example
   * ```ts
   * const message = await client.messages.create({
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
   *   metadata: { source: 'chat-widget' },
   *   model: 'gpt-greenflash-1',
   *   productId: 'prod-789',
   *   projectId: 'proj-001',
   *   systemPrompt: {
   *     templateId: 'tmpl-001',
   *     components: [
   *       { ... },
   *     ],
   *   },
   *   versionId: 'ver-001',
   * });
   * ```
   */
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<MessageCreateResponse> {
    return this._client.post('/messages', { body, ...options });
  }
}

export interface GenericSuccess {
  success: boolean;

  conversationId?: string;

  systemPromptComponentIds?: Array<string>;

  systemPromptTemplateId?: string;
}

export interface MessageCreateResponse {
  conversationId: string;

  success: boolean;

  systemPromptComponentIds?: Array<string>;

  systemPromptTemplateId?: string;

  turns?: Array<MessageCreateResponse.Turn>;
}

export namespace MessageCreateResponse {
  export interface Turn {
    messages: Array<Turn.Message>;

    turnId: string;

    turnIndex: number;
  }

  export namespace Turn {
    export interface Message {
      messageId: string;

      messageIndex: number;

      role: 'user' | 'assistant' | 'system';
    }
  }
}

export interface MessageCreateParams {
  externalUserId: string;

  turns: Array<MessageCreateParams.Turn>;

  conversationId?: string;

  externalConversationId?: string;

  metadata?: { [key: string]: unknown };

  model?: string;

  productId?: string;

  projectId?: string;

  systemPrompt?: string | MessageCreateParams.SystemPrompt;

  versionId?: string;
}

export namespace MessageCreateParams {
  export interface Turn {
    messages: Array<Turn.Message>;

    turnIndex: number;

    createdAt?: string;

    metadata?: { [key: string]: unknown };

    modelOverride?: string;

    systemPromptOverride?: string | Turn.SystemPrompt;
  }

  export namespace Turn {
    export interface Message {
      content: string;

      contentType: 'text' | 'image' | 'audio' | 'json';

      messageIndex: number;

      role: 'user' | 'assistant' | 'system';

      context?: string;

      createdAt?: string;

      metadata?: { [key: string]: unknown };

      tokens?: number;
    }

    export interface SystemPrompt {
      components?: Array<SystemPrompt.Component>;

      externalTemplateId?: string;

      templateId?: string;
    }

    export namespace SystemPrompt {
      export interface Component {
        content: string;

        source: 'customer' | 'participant' | 'greenflash' | 'agent';

        type: 'system' | 'endUser' | 'userModified' | 'rag' | 'agent';

        isDynamic?: boolean;

        name?: string;

        tags?: Array<string>;

        version?: number;
      }
    }
  }

  export interface SystemPrompt {
    components?: Array<SystemPrompt.Component>;

    externalTemplateId?: string;

    templateId?: string;
  }

  export namespace SystemPrompt {
    export interface Component {
      content: string;

      source: 'customer' | 'participant' | 'greenflash' | 'agent';

      type: 'system' | 'endUser' | 'userModified' | 'rag' | 'agent';

      isDynamic?: boolean;

      name?: string;

      tags?: Array<string>;

      version?: number;
    }
  }
}

export declare namespace Messages {
  export {
    type GenericSuccess as GenericSuccess,
    type MessageCreateResponse as MessageCreateResponse,
    type MessageCreateParams as MessageCreateParams,
  };
}
