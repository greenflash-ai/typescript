# Messages

Types:

- <code><a href="./src/resources/messages.ts">CreateParams</a></code>
- <code><a href="./src/resources/messages.ts">CreateResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageItem</a></code>
- <code><a href="./src/resources/messages.ts">SystemPrompt</a></code>

Methods:

- <code title="post /messages">client.messages.<a href="./src/resources/messages.ts">create</a>({ ...params }) -> CreateResponse</code>

# Identify

Types:

- <code><a href="./src/resources/identify.ts">CreateOrUpdateParams</a></code>
- <code><a href="./src/resources/identify.ts">CreateOrUpdateResponse</a></code>
- <code><a href="./src/resources/identify.ts">Participant</a></code>

Methods:

- <code title="post /identify">client.identify.<a href="./src/resources/identify.ts">createOrUpdate</a>({ ...params }) -> CreateOrUpdateResponse</code>

# Ratings

Types:

- <code><a href="./src/resources/ratings.ts">LogRatingParams</a></code>
- <code><a href="./src/resources/ratings.ts">LogRatingResponse</a></code>

Methods:

- <code title="post /ratings">client.ratings.<a href="./src/resources/ratings.ts">log</a>({ ...params }) -> LogRatingResponse</code>

# Conversions

Types:

- <code><a href="./src/resources/conversions.ts">LogConversionParams</a></code>
- <code><a href="./src/resources/conversions.ts">LogConversionResponse</a></code>

Methods:

- <code title="post /conversions">client.conversions.<a href="./src/resources/conversions.ts">log</a>({ ...params }) -> LogConversionResponse</code>
