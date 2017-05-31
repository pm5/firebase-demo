// 定義標題 type 為 string, desciption 是標題
var title = CannerTypes.string().description('標題');
// 定義內容 type 為 string, desciption 是內容, 後台呈現方式是文字編輯器
var content = CannerTypes.string().description('內容').ui('editor');

// posts 是一個 array 存放了每篇文章，而每篇文章都包含了 title 和 content
var posts = CannerTypes.array({title, content}).description('文章');

module.exports = {posts};
