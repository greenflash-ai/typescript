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
- <code><a href="./src/resources/interactions.ts">ListInteractionsParams</a></code>
- <code><a href="./src/resources/interactions.ts">ListInteractionsResponse</a></code>

Methods:

- <code title="get /interactions">client.interactions.<a href="./src/resources/interactions.ts">list</a>({ ...params }) -> ListInteractionsResponse</code>
- <code title="get /interactions/{interactionId}/analytics">client.interactions.<a href="./src/resources/interactions.ts">getInteractionAnalytics</a>(interactionID, { ...params }) -> GetInteractionAnalyticsResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">CreateUserParams</a></code>
- <code><a href="./src/resources/users.ts">CreateUserResponse</a></code>
- <code><a href="./src/resources/users.ts">GetUserAnalyticsParams</a></code>
- <code><a href="./src/resources/users.ts">GetUserAnalyticsResponse</a></code>
- <code><a href="./src/resources/users.ts">ListUsersParams</a></code>
- <code><a href="./src/resources/users.ts">ListUsersResponse</a></code>
- <code><a href="./src/resources/users.ts">Participant</a></code>
- <code><a href="./src/resources/users.ts">UpdateUserParams</a></code>
- <code><a href="./src/resources/users.ts">UpdateUserResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> CreateUserResponse</code>
- <code title="put /users/{userId}">client.users.<a href="./src/resources/users.ts">update</a>(userID, { ...params }) -> UpdateUserResponse</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> ListUsersResponse</code>
- <code title="get /users/{userId}/analytics">client.users.<a href="./src/resources/users.ts">getUserAnalytics</a>(userID, { ...params }) -> GetUserAnalyticsResponse</code>

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

# Events

Types:

- <code><a href="./src/resources/events.ts">CreateEventParams</a></code>
- <code><a href="./src/resources/events.ts">CreateEventResponse</a></code>

Methods:

- <code title="post /events">client.events.<a href="./src/resources/events.ts">create</a>({ ...params }) -> CreateEventResponse</code>
