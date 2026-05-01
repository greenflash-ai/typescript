// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Stream chat and agentic conversations
 */
export class Chat extends APIResource {
  /**
   * Start a streaming chat session with the Greenflash AI agent.
   *
   * **Requires a Growth or Enterprise plan.**
   *
   * The response is a Server-Sent Events (SSE) stream
   * (`Content-Type: text/event-stream`). Each event follows the format:
   *
   * ```
   * event: <type>
   * data: <json>
   * ```
   *
   * **Event types:**
   *
   * - `tool_call` — The agent is invoking a tool. Data:
   *   `{"step": 1, "toolName": "...", "displayName": "..."}`
   * - `tool_result` — A tool returned its result. Data:
   *   `{"step": 1, "toolName": "...", "displayName": "..."}`. For `draftTicket` and
   *   `createTicket`, the event also includes an `output` field with the tool's
   *   payload (see _Ticket creation_ below).
   * - `text_delta` — A chunk of the agent's text response. Concatenate all deltas to
   *   build the full message. Data: `{"text": "..."}`
   * - `done` — The stream completed successfully. Data:
   *   `{"conversationId": "...", "status": "complete", "usage": {"toolCalls": N, "tools": ["..."]}}`
   * - `error` — An error occurred during processing. Data:
   *   `{"error": "...", "code": "..."}`
   *
   * **Multi-turn conversations:** Pass previous messages in the `messages` array and
   * reuse the `conversationId` returned in the `done` event.
   *
   * **Rate limits:** This endpoint is rate-limited per tenant (requests/hour) and
   * subject to token usage limits.
   *
   * ### Ticket creation (two-step draft → confirm)
   *
   * When the tenant has an active ticket-provider connection (e.g. Linear), the
   * agent may emit a `draftTicket` tool call. The `tool_result` event includes an
   * `output` field shaped like:
   *
   * ```json
   * {
   *   "step": 2,
   *   "toolName": "draftTicket",
   *   "displayName": "Drafting ticket",
   *   "output": {
   *     "draft": {
   *       "provider": "linear",
   *       "title": "Billing page 500 for enterprise users",
   *       "description": "...",
   *       "target": { "teamId": "t_123", "teamName": "Core", "teamKey": "CORE" },
   *       "labelIds": ["lbl_bug"],
   *       "source": { "type": "conversation", "conversationId": "conv-abc-123" }
   *     },
   *     "availableLabels": [{ "id": "lbl_bug", "name": "bug", "color": "#f00" }],
   *     "dedupWarning": null
   *   }
   * }
   * ```
   *
   * API consumers should render this draft to the end user. To confirm (optionally
   * with edits), send a follow-up user message asking the agent to call
   * `createTicket` with the final payload. The `createTicket` `tool_result` event
   * contains:
   *
   * ```json
   * {
   *   "step": 3,
   *   "toolName": "createTicket",
   *   "displayName": "Creating ticket",
   *   "output": {
   *     "status": "created",
   *     "providerIdentifier": "LIN-99",
   *     "providerTicketUrl": "https://linear.app/acme/issue/LIN-99"
   *   }
   * }
   * ```
   *
   * `status` is `"created"` on success, `"already_exists"` when deduplication
   * matched an existing ticket (the existing `providerIdentifier` /
   * `providerTicketUrl` are returned), or the event may carry an `error` field (e.g.
   * `"provider_needs_setup"`).
   *
   * @example
   * ```ts
   * await client.chat.create({
   *   question:
   *     'What are the top complaints from enterprise customers this week?',
   *   context: 'Focus on the Customer Support Bot product.',
   *   conversationId: 'conv-abc-123',
   *   messages: [
   *     {
   *       role: 'user',
   *       content:
   *         'Show me sentiment trends for the support bot.',
   *     },
   *     {
   *       role: 'assistant',
   *       content:
   *         'Based on the last 30 days, sentiment is trending slightly negative (-0.08). The main driver is billing-related frustration, which accounts for 34% of negative conversations.',
   *     },
   *   ],
   *   productId: '123e4567-e89b-12d3-a456-426614174000',
   * });
   * ```
   */
  create(body: ChatCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/chat', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface StreamChatRequest {
  /**
   * The current user question to send to the AI agent.
   */
  question: string;

  /**
   * Free-form hint injected into the system prompt for this turn only.
   */
  context?: string;

  /**
   * Stable identifier for multi-turn conversations. If omitted, a new ID is
   * generated.
   */
  conversationId?: string;

  /**
   * Prior conversation history (NOT including the current question). Used for
   * multi-turn context.
   */
  messages?: Array<StreamChatRequest.Message>;

  /**
   * Scope the chat to a specific product. If omitted, the agent can access all
   * products.
   */
  productId?: string;
}

export namespace StreamChatRequest {
  export interface Message {
    /**
     * The text content of the message.
     */
    content: string;

    /**
     * The role of the message sender.
     */
    role: 'user' | 'assistant';
  }
}

export interface ChatCreateParams {
  /**
   * The current user question to send to the AI agent.
   */
  question: string;

  /**
   * Free-form hint injected into the system prompt for this turn only.
   */
  context?: string;

  /**
   * Stable identifier for multi-turn conversations. If omitted, a new ID is
   * generated.
   */
  conversationId?: string;

  /**
   * Prior conversation history (NOT including the current question). Used for
   * multi-turn context.
   */
  messages?: Array<ChatCreateParams.Message>;

  /**
   * Scope the chat to a specific product. If omitted, the agent can access all
   * products.
   */
  productId?: string;
}

export namespace ChatCreateParams {
  export interface Message {
    /**
     * The text content of the message.
     */
    content: string;

    /**
     * The role of the message sender.
     */
    role: 'user' | 'assistant';
  }
}

export declare namespace Chat {
  export { type StreamChatRequest as StreamChatRequest, type ChatCreateParams as ChatCreateParams };
}
