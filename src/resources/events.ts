// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  /**
   * Track timestamped events representing user or organization actions. Events are
   * used to track important business outcomes (signups, conversions, upgrades,
   * cancellations, etc.) and integrate them into Greenflash's quality metrics. Each
   * event can be optionally linked to a conversation, user, and organization.
   */
  create(body: EventCreateParams, options?: RequestOptions): APIPromise<CreateEventResponse> {
    return this._client.post('/events', { body, ...options });
  }
}

/**
 * Request payload for creating events.
 */
export interface CreateEventParams {
  /**
   * The specific name or category of the event being tracked (e.g., "trial_started",
   * "signup", "feature_usage"). This helps categorize events for analysis and often
   * pairs with "value" to define the outcome.
   */
  eventType: string;

  /**
   * The unique identifier of the Greenflash product associated with this event. This
   * links the event to a specific product context.
   */
  productId: string;

  /**
   * The specific value associated with the event (e.g., "99.00", "5",
   * "premium_plan"). This pairs with "valueType" and "eventType" to define the
   * magnitude or content of the event.
   */
  value: string;

  /**
   * The unique Greenflash identifier for the conversation. Links the event to a
   * specific chat session in Greenflash.
   */
  conversationId?: string;

  /**
   * The ISO 8601 timestamp of when the event actually occurred. Defaults to the
   * current time if not provided. Useful for backdating historical events.
   */
  eventAt?: string;

  /**
   * Your system's unique identifier for the conversation or thread where this event
   * occurred.
   */
  externalConversationId?: string;

  /**
   * Your system's unique identifier for the organization associated with this event.
   * Used to map events to your customer accounts.
   */
  externalOrganizationId?: string;

  /**
   * Your system's unique identifier for the user associated with this event. Used to
   * map Greenflash events back to your user records.
   */
  externalUserId?: string;

  /**
   * When true, bypasses sampling and ensures this event is always ingested
   * regardless of sampleRate. Use for critical events that must be captured.
   */
  forceSample?: boolean;

  /**
   * A high-level categorization of how this event generally "changed things" or
   * influenced quality (positive, negative, or neutral). Use this for broad
   * classification of outcomes.
   */
  influence?: 'positive' | 'negative' | 'neutral';

  /**
   * A unique key for idempotency. If you retry a request with the same insertId, it
   * prevents creating a duplicate event record.
   */
  insertId?: string;

  /**
   * The unique Greenflash identifier for the organization. Provide this if you have
   * the Greenflash Organization ID.
   */
  organizationId?: string;

  /**
   * A key-value object for storing additional, unstructured context about the event
   * (e.g., { source: "web_app", campaign_id: "123" }). Useful for custom filtering.
   */
  properties?: { [key: string]: unknown };

  /**
   * A precise numeric score between -1.0 and 1.0 for direct control over the quality
   * impact. If omitted, it is automatically derived from the "influence" field.
   */
  qualityImpactScore?: number;

  /**
   * Controls the percentage of requests that are ingested (0.0 to 1.0). For example,
   * 0.1 means 10% of events will be stored. Defaults to 1.0 (all events ingested).
   * Sampling is deterministic based on event type and organization.
   */
  sampleRate?: number;

  /**
   * The unique Greenflash identifier for the user. Provide this if you already have
   * the Greenflash User ID; otherwise, use "externalUserId".
   */
  userId?: string;

  /**
   * Defines the format of the "value" field (currency, numeric, or text). This
   * ensures the value is interpreted and processed correctly.
   */
  valueType?: 'currency' | 'numeric' | 'text' | 'boolean';
}

/**
 * Success response for event creation.
 */
export interface CreateEventResponse {
  /**
   * The unique Greenflash ID of the event record that was created.
   */
  eventId: string;

  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

export interface EventCreateParams {
  /**
   * The specific name or category of the event being tracked (e.g., "trial_started",
   * "signup", "feature_usage"). This helps categorize events for analysis and often
   * pairs with "value" to define the outcome.
   */
  eventType: string;

  /**
   * The unique identifier of the Greenflash product associated with this event. This
   * links the event to a specific product context.
   */
  productId: string;

  /**
   * The specific value associated with the event (e.g., "99.00", "5",
   * "premium_plan"). This pairs with "valueType" and "eventType" to define the
   * magnitude or content of the event.
   */
  value: string;

  /**
   * The unique Greenflash identifier for the conversation. Links the event to a
   * specific chat session in Greenflash.
   */
  conversationId?: string;

  /**
   * The ISO 8601 timestamp of when the event actually occurred. Defaults to the
   * current time if not provided. Useful for backdating historical events.
   */
  eventAt?: string;

  /**
   * Your system's unique identifier for the conversation or thread where this event
   * occurred.
   */
  externalConversationId?: string;

  /**
   * Your system's unique identifier for the organization associated with this event.
   * Used to map events to your customer accounts.
   */
  externalOrganizationId?: string;

  /**
   * Your system's unique identifier for the user associated with this event. Used to
   * map Greenflash events back to your user records.
   */
  externalUserId?: string;

  /**
   * When true, bypasses sampling and ensures this event is always ingested
   * regardless of sampleRate. Use for critical events that must be captured.
   */
  forceSample?: boolean;

  /**
   * A high-level categorization of how this event generally "changed things" or
   * influenced quality (positive, negative, or neutral). Use this for broad
   * classification of outcomes.
   */
  influence?: 'positive' | 'negative' | 'neutral';

  /**
   * A unique key for idempotency. If you retry a request with the same insertId, it
   * prevents creating a duplicate event record.
   */
  insertId?: string;

  /**
   * The unique Greenflash identifier for the organization. Provide this if you have
   * the Greenflash Organization ID.
   */
  organizationId?: string;

  /**
   * A key-value object for storing additional, unstructured context about the event
   * (e.g., { source: "web_app", campaign_id: "123" }). Useful for custom filtering.
   */
  properties?: { [key: string]: unknown };

  /**
   * A precise numeric score between -1.0 and 1.0 for direct control over the quality
   * impact. If omitted, it is automatically derived from the "influence" field.
   */
  qualityImpactScore?: number;

  /**
   * Controls the percentage of requests that are ingested (0.0 to 1.0). For example,
   * 0.1 means 10% of events will be stored. Defaults to 1.0 (all events ingested).
   * Sampling is deterministic based on event type and organization.
   */
  sampleRate?: number;

  /**
   * The unique Greenflash identifier for the user. Provide this if you already have
   * the Greenflash User ID; otherwise, use "externalUserId".
   */
  userId?: string;

  /**
   * Defines the format of the "value" field (currency, numeric, or text). This
   * ensures the value is interpreted and processed correctly.
   */
  valueType?: 'currency' | 'numeric' | 'text' | 'boolean';
}

export declare namespace Events {
  export {
    type CreateEventParams as CreateEventParams,
    type CreateEventResponse as CreateEventResponse,
    type EventCreateParams as EventCreateParams,
  };
}
