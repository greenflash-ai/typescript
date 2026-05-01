// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PromptsAPI from './prompts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Capture interactions between users and AI
 */
export class Messages extends APIResource {
  /**
   * Send us your AI conversations so we can analyze them for you. Works with
   * everything from simple chatbots to complex agentic systems — text or voice.
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
   * **Voice Agents:** For voice conversations, include a `voiceCall` object on the
   * request (call duration, recording URL, ended reason, latency stats, structured
   * outputs) and a `voice` object on each message (per-turn timing, ASR confidence,
   * prosody, interruption signals). Native webhook integrations are available for
   * Vapi, Retell, ElevenLabs, Bland AI, Synthflow, and Simple.ai — point your
   * provider at `/v1/integrations/<provider>?productId=<uuid>` and we'll handle the
   * transform. See the voice example below for the canonical shape.
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
   * - **Automatic De-duplication:** Messages with an `externalMessageId` that
   *   already exists in the conversation are automatically skipped. This allows you
   *   to safely resend a batch of messages with new messages appended — previously
   *   ingested messages will be deduplicated and only new messages will be inserted.
   *   Each message in the response includes a `status` field ("created" or
   *   "deduplicated") so you know what happened.
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
  systemPrompt?: SystemPrompt;

  /**
   * Voice-specific signals for the full call/conversation (platform, duration,
   * latency aggregates, recording URL, etc.). Stored on the conversation alongside
   * `properties` and analyzed by voice-aware pipelines.
   */
  voiceCall?: CreateMessageParams.VoiceCall;
}

export namespace CreateMessageParams {
  /**
   * Voice-specific signals for the full call/conversation (platform, duration,
   * latency aggregates, recording URL, etc.). Stored on the conversation alongside
   * `properties` and analyzed by voice-aware pipelines.
   */
  export interface VoiceCall {
    /**
     * Optional platform-supplied success determination (e.g. Retell’s
     * `call_successful`).
     */
    callSuccessful?: boolean;

    /**
     * Total call duration in milliseconds.
     */
    durationMs?: number;

    /**
     * How the call ended (platform-specific string, e.g. "user_hangup",
     * "assistant_hangup", "timeout").
     */
    endedReason?: string;

    /**
     * Number of barge-ins / interruptions detected over the call.
     */
    interruptionCount?: number;

    /**
     * Component and end-to-end latency aggregates for the call.
     */
    latency?: VoiceCall.Latency;

    /**
     * Identifier of the voice platform that produced the call.
     */
    platform?:
      | 'vapi'
      | 'retell'
      | 'elevenlabs'
      | 'openai_realtime'
      | 'livekit'
      | 'bland'
      | 'synthflow'
      | 'simpleai'
      | 'other';

    /**
     * The voice platform’s native call ID. Useful for cross-referencing back to the
     * source.
     */
    platformCallId?: string;

    /**
     * Optional URL to the full call recording. Greenflash does not store audio; the
     * URL is embedded in the UI as a pass-through.
     */
    recordingUrl?: string;

    /**
     * Number of long silence segments detected over the call.
     */
    silenceCount?: number;

    /**
     * Optional structured data extracted from the call by the platform (e.g. Vapi
     * structured outputs, Retell custom analysis data).
     */
    structuredOutputs?: { [key: string]: unknown };
  }

  export namespace VoiceCall {
    /**
     * Component and end-to-end latency aggregates for the call.
     */
    export interface Latency {
      /**
       * Average ASR (speech-to-text) latency in ms.
       */
      asrMs?: number;

      /**
       * Average end-to-end latency from user end-of-turn to agent first audio (ms).
       */
      e2eMs?: number;

      /**
       * Average LLM inference latency in ms.
       */
      llmMs?: number;

      /**
       * Average TTS (text-to-speech) latency in ms.
       */
      ttsMs?: number;
    }
  }
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

  /**
   * Template variables used or detected for this conversation.
   */
  promptVariables?: { [key: string]: string };

  /**
   * Template match info when content was auto-matched against an existing template.
   */
  templateMatch?: CreateMessageResponse.TemplateMatch;
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
     * Whether the message was newly created or deduplicated. Messages with an
     * externalMessageId that already exists in the conversation are automatically
     * skipped and returned with status "deduplicated".
     */
    status: 'created' | 'deduplicated';

    /**
     * Your external identifier for the message, if provided.
     */
    externalMessageId?: string;
  }

  /**
   * Template match info when content was auto-matched against an existing template.
   */
  export interface TemplateMatch {
    matched: boolean;

    confidence?: 'exact' | 'high' | 'medium';

    detectedVariables?: { [key: string]: string };

    promptId?: string;
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
   * When this message was created. Accepts a Date or an ISO-8601 string. If not
   * provided, messages get sequential timestamps. Use for importing historical data
   * — and required when you want the voice analysis pipeline to derive
   * response-latency / silence-before signals from inter-message gaps on
   * uninstrumented voice transcripts.
   */
  createdAt?: string | null;

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
   * types: user_message, assistant_message, system_message, final_response, thought,
   * tool_call, observation, retrieval, memory_read, memory_write, chain_start,
   * chain_end, embedding, tool_error, callback, llm, task, workflow
   */
  messageType?:
    | 'user_message'
    | 'assistant_message'
    | 'system_message'
    | 'final_response'
    | 'thought'
    | 'tool_call'
    | 'observation'
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
   * The AI model used for this specific message. Use for multi-agent scenarios where
   * different messages use different models. Overrides the conversation-level model
   * for this message.
   */
  model?: string;

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

  /**
   * Voice-specific signals for this turn (latency, interruption, ASR confidence,
   * prosody, etc.). Stored alongside `properties` and analyzed by voice-aware
   * pipelines.
   */
  voice?: MessageItem.Voice;
}

export namespace MessageItem {
  /**
   * Voice-specific signals for this turn (latency, interruption, ASR confidence,
   * prosody, etc.). Stored alongside `properties` and analyzed by voice-aware
   * pipelines.
   */
  export interface Voice {
    /**
     * ASR transcription confidence for this turn, 0 (uncertain) to 1 (fully
     * confident).
     */
    asrConfidence?: number;

    /**
     * Optional URL to the audio segment for this turn. Greenflash does not store
     * audio; the URL is embedded in the UI as a pass-through.
     */
    audioUrl?: string;

    /**
     * True when this turn began while the other speaker was still talking (a barge-in
     * / overlap).
     */
    bargeIn?: boolean;

    /**
     * Length of this turn in milliseconds.
     */
    durationMs?: number;

    /**
     * When this turn finished speaking, as Unix epoch milliseconds.
     */
    endedAt?: number;

    /**
     * Optional prosody / tone signals from upstream voice infrastructure (Deepgram,
     * Hume, Retell, etc.).
     */
    prosody?: Voice.Prosody;

    /**
     * Time between the previous speaker ending and this turn starting (ms). Useful for
     * measuring agent response latency.
     */
    responseLatencyMs?: number;

    /**
     * Silence duration immediately before this turn (ms).
     */
    silenceBeforeMs?: number;

    /**
     * Optional speaker label (e.g. "agent", "user", or a diarization-assigned ID like
     * "Speaker 0").
     */
    speaker?: string;

    /**
     * When this turn started speaking, as Unix epoch milliseconds.
     */
    startedAt?: number;

    /**
     * True when this turn was cut off by the other speaker.
     */
    wasInterrupted?: boolean;
  }

  export namespace Voice {
    /**
     * Optional prosody / tone signals from upstream voice infrastructure (Deepgram,
     * Hume, Retell, etc.).
     */
    export interface Prosody {
      /**
       * Vocal energy / intensity, 0 (calm) to 1 (highly energetic).
       */
      arousal?: number;

      /**
       * Optional fine-grained emotion label provided by an upstream prosody model.
       */
      emotion?: string;

      /**
       * Prosody-derived sentiment label.
       */
      sentimentLabel?: 'positive' | 'neutral' | 'negative';

      /**
       * Prosody-derived sentiment score from -1 (negative) to 1 (positive). Distinct
       * from text-derived sentiment — captures tone/intonation rather than word choice.
       */
      sentimentScore?: number;
    }
  }
}

/**
 * System prompt for the conversation. Can be a simple string or a prompt object
 * with components.
 */
export type SystemPrompt = string | SystemPrompt.SystemPromptObject;

export namespace SystemPrompt {
  /**
   * System prompt as a prompt object. Can reference an existing prompt by ID or
   * define new components inline.
   */
  export interface SystemPromptObject {
    /**
     * Array of component objects. When provided with promptId/externalPromptId, will
     * upsert the prompt. When omitted with promptId/externalPromptId, will reference
     * an existing prompt.
     */
    components?: Array<PromptsAPI.ComponentInput>;

    /**
     * Simple string content (shorthand for a single system component). Mutually
     * exclusive with components.
     */
    content?: string;

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

    /**
     * Template variables for {{placeholder}} interpolation in component content.
     */
    variables?: { [key: string]: string };
  }
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
  systemPrompt?: SystemPrompt;

  /**
   * Voice-specific signals for the full call/conversation (platform, duration,
   * latency aggregates, recording URL, etc.). Stored on the conversation alongside
   * `properties` and analyzed by voice-aware pipelines.
   */
  voiceCall?: MessageCreateParams.VoiceCall;
}

export namespace MessageCreateParams {
  /**
   * Voice-specific signals for the full call/conversation (platform, duration,
   * latency aggregates, recording URL, etc.). Stored on the conversation alongside
   * `properties` and analyzed by voice-aware pipelines.
   */
  export interface VoiceCall {
    /**
     * Optional platform-supplied success determination (e.g. Retell’s
     * `call_successful`).
     */
    callSuccessful?: boolean;

    /**
     * Total call duration in milliseconds.
     */
    durationMs?: number;

    /**
     * How the call ended (platform-specific string, e.g. "user_hangup",
     * "assistant_hangup", "timeout").
     */
    endedReason?: string;

    /**
     * Number of barge-ins / interruptions detected over the call.
     */
    interruptionCount?: number;

    /**
     * Component and end-to-end latency aggregates for the call.
     */
    latency?: VoiceCall.Latency;

    /**
     * Identifier of the voice platform that produced the call.
     */
    platform?:
      | 'vapi'
      | 'retell'
      | 'elevenlabs'
      | 'openai_realtime'
      | 'livekit'
      | 'bland'
      | 'synthflow'
      | 'simpleai'
      | 'other';

    /**
     * The voice platform’s native call ID. Useful for cross-referencing back to the
     * source.
     */
    platformCallId?: string;

    /**
     * Optional URL to the full call recording. Greenflash does not store audio; the
     * URL is embedded in the UI as a pass-through.
     */
    recordingUrl?: string;

    /**
     * Number of long silence segments detected over the call.
     */
    silenceCount?: number;

    /**
     * Optional structured data extracted from the call by the platform (e.g. Vapi
     * structured outputs, Retell custom analysis data).
     */
    structuredOutputs?: { [key: string]: unknown };
  }

  export namespace VoiceCall {
    /**
     * Component and end-to-end latency aggregates for the call.
     */
    export interface Latency {
      /**
       * Average ASR (speech-to-text) latency in ms.
       */
      asrMs?: number;

      /**
       * Average end-to-end latency from user end-of-turn to agent first audio (ms).
       */
      e2eMs?: number;

      /**
       * Average LLM inference latency in ms.
       */
      llmMs?: number;

      /**
       * Average TTS (text-to-speech) latency in ms.
       */
      ttsMs?: number;
    }
  }
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
