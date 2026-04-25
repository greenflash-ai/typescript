// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Review flagged conversations
 */
export class Inbox extends APIResource {
  /**
   * List conversations that have been flagged for review. Filter by review status,
   * trigger type, or severity to focus on what matters most. Results are ordered by
   * attention score (unreviewed) or last updated (reviewed/dismissed).
   */
  list(query: InboxListParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListInboxResponse> {
    return this._client.get('/inbox', { query, ...options });
  }

  /**
   * Get the full detail of a single inbox item including conversation messages,
   * analysis scores, trigger metadata, keywords, and participant information.
   */
  get(conversationID: string, options?: RequestOptions): APIPromise<GetInboxItemResponse> {
    return this._client.get(path`/inbox/${conversationID}`, options);
  }
}

/**
 * Analysis scores for this conversation.
 */
export interface AnalysisScores {
  /**
   * Frustration level detected.
   */
  frustration: AnalysisScores.Frustration | null;

  /**
   * Conversation quality index score.
   */
  qualityIndex: number | null;

  /**
   * Average user sentiment.
   */
  sentiment: AnalysisScores.Sentiment | null;

  /**
   * Struggle level detected.
   */
  struggle: AnalysisScores.Struggle | null;
}

export namespace AnalysisScores {
  /**
   * Frustration level detected.
   */
  export interface Frustration {
    label: string;

    score: number;
  }

  /**
   * Average user sentiment.
   */
  export interface Sentiment {
    label: string;

    score: number;
  }

  /**
   * Struggle level detected.
   */
  export interface Struggle {
    label: string;

    score: number;
  }
}

export interface ConversationMessage {
  /**
   * Message content.
   */
  content: string;

  /**
   * Message role (e.g. "user", "assistant").
   */
  role: string;

  /**
   * When the message was sent (ISO 8601).
   */
  timestamp: string | null;
}

export interface GetInboxItemParams {
  /**
   * The conversation ID to retrieve.
   */
  conversationId: string;
}

export interface GetInboxItemResponse {
  /**
   * Analysis scores for this conversation.
   */
  analysis: AnalysisScores | null;

  /**
   * The conversation ID.
   */
  conversationId: string;

  /**
   * Keywords extracted from the conversation.
   */
  keywords: Array<string> | null;

  /**
   * Number of chat messages in the conversation.
   */
  messageCount: number;

  /**
   * Conversation messages.
   */
  messages: Array<ConversationMessage>;

  /**
   * Participant information.
   */
  participant: ParticipantInfo | null;

  /**
   * Current review status.
   */
  reviewStatus: 'unreviewed' | 'reviewed' | 'dismissed';

  /**
   * AI-generated summary of the conversation.
   */
  summary: string | null;

  /**
   * When the inbox item was created (ISO 8601).
   */
  timestamp: string;

  /**
   * Main topic of the conversation.
   */
  topic: string | null;

  /**
   * All triggers associated with this conversation.
   */
  triggers: Array<TriggerDetail>;

  /**
   * Primary trigger type that flagged this conversation.
   */
  triggerType: string | null;
}

export interface InboxItemSummary {
  /**
   * The conversation ID.
   */
  conversationId: string;

  /**
   * Number of chat messages in the conversation.
   */
  messageCount: number;

  /**
   * Current review status.
   */
  reviewStatus: 'unreviewed' | 'reviewed' | 'dismissed';

  /**
   * When the inbox item was created (ISO 8601).
   */
  timestamp: string;

  /**
   * Main topic of the conversation.
   */
  topic: string | null;

  /**
   * Primary trigger type that flagged this conversation.
   */
  triggerType: string | null;
}

export interface ListInboxParams {
  /**
   * Minimum severity level to include (1-5).
   */
  minSeverity?: number;

  /**
   * Filter by review status. Defaults to "unreviewed".
   */
  status?: 'unreviewed' | 'reviewed' | 'dismissed';

  /**
   * Filter by trigger type.
   */
  triggerType?: 'guardrail' | 'expectation_check' | 'novelty' | 'manual_review' | 'revenue_risk';
}

/**
 * Array of inbox items. Pagination via Link header.
 */
export type ListInboxResponse = Array<InboxItemSummary>

/**
 * Participant information.
 */
export interface ParticipantInfo {
  /**
   * Participant ID.
   */
  id: string;

  /**
   * Participant email.
   */
  email: string | null;

  /**
   * External participant ID.
   */
  externalId: string | null;

  /**
   * Participant name.
   */
  name: string | null;
}

export interface TriggerDetail {
  /**
   * Confidence score of the trigger.
   */
  confidence: number | null;

  /**
   * Human-readable reason.
   */
  reason: string | null;

  /**
   * Severity level (1-5).
   */
  severity: number;

  /**
   * Source key of the trigger.
   */
  source: string | null;

  /**
   * Type of trigger.
   */
  triggerType: string;
}

export interface InboxListParams {
  /**
   * Minimum severity level to include (1-5).
   */
  minSeverity?: number;

  /**
   * Filter by review status. Defaults to "unreviewed".
   */
  status?: 'unreviewed' | 'reviewed' | 'dismissed';

  /**
   * Filter by trigger type.
   */
  triggerType?: 'guardrail' | 'expectation_check' | 'novelty' | 'manual_review' | 'revenue_risk';
}

export declare namespace Inbox {
  export {
    type AnalysisScores as AnalysisScores,
    type ConversationMessage as ConversationMessage,
    type GetInboxItemParams as GetInboxItemParams,
    type GetInboxItemResponse as GetInboxItemResponse,
    type InboxItemSummary as InboxItemSummary,
    type ListInboxParams as ListInboxParams,
    type ListInboxResponse as ListInboxResponse,
    type ParticipantInfo as ParticipantInfo,
    type TriggerDetail as TriggerDetail,
    type InboxListParams as InboxListParams
  };
}
