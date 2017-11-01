// declares type is string and description is Title
var title = CannerTypes.string().description('Title');
// declares the plugin type is string and the description is Content, display as a editor
var content = CannerTypes.string().description('Content').ui('editor');

// posts is an array, each post in it contains title and content
var posts = CannerTypes.array({title, content}).description('Posts');

module.exports = {posts};
