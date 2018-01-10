CannerTypes.endpoint('firebase', {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID"
});

// declares type is string and the title is Title
var title = CannerTypes
              .string()
              .title('Title');

// declares the plugin type is string and the title is Content, display as a editor
var content = CannerTypes
              .string()
              .title('Content')
              .ui('editor');

// posts is an array, each post in it contains title and content
var posts = CannerTypes
              .array({title, content})
              .title('Posts');

module.exports = {posts};
