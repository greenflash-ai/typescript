# Messages

Types:

- <code><a href="./src/resources/messages.ts">CreateMessageParams</a></code>
- <code><a href="./src/resources/messages.ts">CreateMessageResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageItem</a></code>
- <code><a href="./src/resources/messages.ts">SystemPrompt</a></code>

Methods:

- <code title="post /messages">client.messages.<a href="./src/resources/messages.ts">create</a>({ ...params }) -> CreateMessageResponse</code>

# Interactions

Types:

- <code><a href="./src/resources/interactions.ts">GetInteractionAnalyticsParams</a></code>
- <code><a href="./src/resources/interactions.ts">GetInteractionAnalyticsResponse</a></code>
- <code><a href="./src/resources/interactions.ts">GetInteractionDetailParams</a></code>
- <code><a href="./src/resources/interactions.ts">Interaction</a></code>
- <code><a href="./src/resources/interactions.ts">InteractionDetail</a></code>
- <code><a href="./src/resources/interactions.ts">ListInteractionsParams</a></code>
- <code><a href="./src/resources/interactions.ts">ListInteractionsResponse</a></code>

Methods:

- <code title="get /interactions">client.interactions.<a href="./src/resources/interactions.ts">list</a>({ ...params }) -> ListInteractionsResponse</code>
- <code title="get /interactions/{interactionId}">client.interactions.<a href="./src/resources/interactions.ts">get</a>(interactionID) -> InteractionDetail</code>
- <code title="get /interactions/{interactionId}/analytics">client.interactions.<a href="./src/resources/interactions.ts">getInteractionAnalytics</a>(interactionID, { ...params }) -> GetInteractionAnalyticsResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">CreateUserParams</a></code>
- <code><a href="./src/resources/users.ts">CreateUserResponse</a></code>
- <code><a href="./src/resources/users.ts">GetUserAnalyticsParams</a></code>
- <code><a href="./src/resources/users.ts">GetUserAnalyticsResponse</a></code>
- <code><a href="./src/resources/users.ts">GetUserSegmentsResponse</a></code>
- <code><a href="./src/resources/users.ts">ListUsersParams</a></code>
- <code><a href="./src/resources/users.ts">ListUsersResponse</a></code>
- <code><a href="./src/resources/users.ts">Participant</a></code>
- <code><a href="./src/resources/users.ts">UpdateUserParams</a></code>
- <code><a href="./src/resources/users.ts">UpdateUserResponse</a></code>
- <code><a href="./src/resources/users.ts">UserSegmentMembership</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> CreateUserResponse</code>
- <code title="put /users/{userId}">client.users.<a href="./src/resources/users.ts">update</a>(userID, { ...params }) -> UpdateUserResponse</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> ListUsersResponse</code>
- <code title="get /users/{userId}/analytics">client.users.<a href="./src/resources/users.ts">getUserAnalytics</a>(userID, { ...params }) -> GetUserAnalyticsResponse</code>
- <code title="get /users/{userId}/segments">client.users.<a href="./src/resources/users.ts">getUserSegments</a>(userID) -> GetUserSegmentsResponse</code>

# Ratings

Types:

- <code><a href="./src/resources/ratings.ts">LogRatingParams</a></code>
- <code><a href="./src/resources/ratings.ts">LogRatingResponse</a></code>

Methods:

- <code title="post /ratings">client.ratings.<a href="./src/resources/ratings.ts">log</a>({ ...params }) -> LogRatingResponse</code>

# Organizations

Types:

- <code><a href="./src/resources/organizations.ts">CreateOrganizationParams</a></code>
- <code><a href="./src/resources/organizations.ts">CreateOrganizationResponse</a></code>
- <code><a href="./src/resources/organizations.ts">GetOrganizationAnalyticsParams</a></code>
- <code><a href="./src/resources/organizations.ts">GetOrganizationAnalyticsResponse</a></code>
- <code><a href="./src/resources/organizations.ts">ListOrganizationsParams</a></code>
- <code><a href="./src/resources/organizations.ts">ListOrganizationsResponse</a></code>
- <code><a href="./src/resources/organizations.ts">TenantOrganization</a></code>
- <code><a href="./src/resources/organizations.ts">UpdateOrganizationParams</a></code>
- <code><a href="./src/resources/organizations.ts">UpdateOrganizationResponse</a></code>

Methods:

- <code title="post /organizations">client.organizations.<a href="./src/resources/organizations.ts">create</a>({ ...params }) -> CreateOrganizationResponse</code>
- <code title="put /organizations/{organizationId}">client.organizations.<a href="./src/resources/organizations.ts">update</a>(organizationID, { ...params }) -> UpdateOrganizationResponse</code>
- <code title="get /organizations">client.organizations.<a href="./src/resources/organizations.ts">list</a>({ ...params }) -> ListOrganizationsResponse</code>
- <code title="get /organizations/{organizationId}/analytics">client.organizations.<a href="./src/resources/organizations.ts">getOrganizationAnalytics</a>(organizationID, { ...params }) -> GetOrganizationAnalyticsResponse</code>

# Prompts

Types:

- <code><a href="./src/resources/prompts.ts">ComponentInput</a></code>
- <code><a href="./src/resources/prompts.ts">ComponentUpdate</a></code>
- <code><a href="./src/resources/prompts.ts">CreatePromptParams</a></code>
- <code><a href="./src/resources/prompts.ts">CreatePromptResponse</a></code>
- <code><a href="./src/resources/prompts.ts">DeletePromptResponse</a></code>
- <code><a href="./src/resources/prompts.ts">GetPromptAnalyticsResponse</a></code>
- <code><a href="./src/resources/prompts.ts">GetPromptParams</a></code>
- <code><a href="./src/resources/prompts.ts">GetPromptResponse</a></code>
- <code><a href="./src/resources/prompts.ts">ListPromptsParams</a></code>
- <code><a href="./src/resources/prompts.ts">ListPromptsResponse</a></code>
- <code><a href="./src/resources/prompts.ts">Prompt</a></code>
- <code><a href="./src/resources/prompts.ts">PromptComponent</a></code>
- <code><a href="./src/resources/prompts.ts">SlimPrompt</a></code>
- <code><a href="./src/resources/prompts.ts">SlimPromptComponent</a></code>
- <code><a href="./src/resources/prompts.ts">UpdatePromptParams</a></code>
- <code><a href="./src/resources/prompts.ts">UpdatePromptResponse</a></code>

Methods:

- <code title="post /prompts">client.prompts.<a href="./src/resources/prompts.ts">create</a>({ ...params }) -> CreatePromptResponse</code>
- <code title="put /prompts/{id}">client.prompts.<a href="./src/resources/prompts.ts">update</a>(id, { ...params }) -> UpdatePromptResponse</code>
- <code title="get /prompts">client.prompts.<a href="./src/resources/prompts.ts">list</a>({ ...params }) -> ListPromptsResponse</code>
- <code title="delete /prompts/{id}">client.prompts.<a href="./src/resources/prompts.ts">delete</a>(id) -> DeletePromptResponse</code>
- <code title="get /prompts/{id}">client.prompts.<a href="./src/resources/prompts.ts">get</a>(id) -> GetPromptResponse</code>
- <code title="get /prompts/{id}/analytics">client.prompts.<a href="./src/resources/prompts.ts">getPromptAnalytics</a>(id) -> GetPromptAnalyticsResponse</code>

# Chat

Types:

- <code><a href="./src/resources/chat.ts">StreamChatRequest</a></code>

Methods:

- <code title="post /chat">client.chat.<a href="./src/resources/chat.ts">create</a>({ ...params }) -> void</code>

# Inbox

Types:

- <code><a href="./src/resources/inbox.ts">AnalysisScores</a></code>
- <code><a href="./src/resources/inbox.ts">ConversationMessage</a></code>
- <code><a href="./src/resources/inbox.ts">GetInboxItemParams</a></code>
- <code><a href="./src/resources/inbox.ts">GetInboxItemResponse</a></code>
- <code><a href="./src/resources/inbox.ts">InboxItemSummary</a></code>
- <code><a href="./src/resources/inbox.ts">ListInboxParams</a></code>
- <code><a href="./src/resources/inbox.ts">ListInboxResponse</a></code>
- <code><a href="./src/resources/inbox.ts">ParticipantInfo</a></code>
- <code><a href="./src/resources/inbox.ts">TriggerDetail</a></code>

Methods:

- <code title="get /inbox">client.inbox.<a href="./src/resources/inbox.ts">list</a>({ ...params }) -> ListInboxResponse</code>
- <code title="get /inbox/{conversationId}">client.inbox.<a href="./src/resources/inbox.ts">get</a>(conversationID) -> GetInboxItemResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">GetModelAnalyticsParams</a></code>
- <code><a href="./src/resources/models.ts">GetModelAnalyticsResponse</a></code>
- <code><a href="./src/resources/models.ts">GetModelResponse</a></code>
- <code><a href="./src/resources/models.ts">ListModelsParams</a></code>
- <code><a href="./src/resources/models.ts">ListModelsResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelProductUsage</a></code>
- <code><a href="./src/resources/models.ts">ModelSummary</a></code>

Methods:

- <code title="get /models">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ListModelsResponse</code>
- <code title="get /models/{modelId}">client.models.<a href="./src/resources/models.ts">get</a>(modelID) -> GetModelResponse</code>
- <code title="get /models/{modelId}/analytics">client.models.<a href="./src/resources/models.ts">getModelAnalytics</a>(modelID, { ...params }) -> GetModelAnalyticsResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">GetProductAnalyticsResponse</a></code>
- <code><a href="./src/resources/products.ts">GetProductResponse</a></code>
- <code><a href="./src/resources/products.ts">ListProductsParams</a></code>
- <code><a href="./src/resources/products.ts">ListProductsResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductMember</a></code>
- <code><a href="./src/resources/products.ts">ProductSummary</a></code>
- <code><a href="./src/resources/products.ts">QualityIndexMetricWeight</a></code>

Methods:

- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>({ ...params }) -> ListProductsResponse</code>
- <code title="get /products/{productId}">client.products.<a href="./src/resources/products.ts">get</a>(productID) -> GetProductResponse</code>
- <code title="get /products/{productId}/analytics">client.products.<a href="./src/resources/products.ts">getProductAnalytics</a>(productID) -> GetProductAnalyticsResponse</code>

# Segments

Types:

- <code><a href="./src/resources/segments.ts">CreateSegmentParams</a></code>
- <code><a href="./src/resources/segments.ts">CreateSegmentResponse</a></code>
- <code><a href="./src/resources/segments.ts">GetSegmentAnalyticsParams</a></code>
- <code><a href="./src/resources/segments.ts">GetSegmentAnalyticsResponse</a></code>
- <code><a href="./src/resources/segments.ts">GetSegmentResponse</a></code>
- <code><a href="./src/resources/segments.ts">ListSegmentsParams</a></code>
- <code><a href="./src/resources/segments.ts">ListSegmentsResponse</a></code>
- <code><a href="./src/resources/segments.ts">SegmentSummary</a></code>

Methods:

- <code title="post /segments">client.segments.<a href="./src/resources/segments.ts">create</a>({ ...params }) -> CreateSegmentResponse</code>
- <code title="get /segments">client.segments.<a href="./src/resources/segments.ts">list</a>({ ...params }) -> ListSegmentsResponse</code>
- <code title="get /segments/{segmentId}">client.segments.<a href="./src/resources/segments.ts">get</a>(segmentID) -> GetSegmentResponse</code>
- <code title="get /segments/{segmentId}/analytics">client.segments.<a href="./src/resources/segments.ts">getSegmentAnalytics</a>(segmentID, { ...params }) -> GetSegmentAnalyticsResponse</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">CreateEventParams</a></code>
- <code><a href="./src/resources/events.ts">CreateEventResponse</a></code>

Methods:

- <code title="post /events">client.events.<a href="./src/resources/events.ts">create</a>({ ...params }) -> CreateEventResponse</code>
