var title = CannerTypes.string().description('標題');
var content = CannerTypes.string().description('內容').ui('editor');

var posts = CannerTypes.array({title, content}).description('文章');

module.exports = {posts};
