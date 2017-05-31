var db = new CannerApi(<YOUR API KEY>).connect();

db.collection('posts').find(function(err, docs) {
  renderPosts(docs);
})

function renderPosts(posts) {
  posts.forEach(function(post) {
    addPost(post.title, post.content);
  })
}
  
function addPost(title, content) {
  var post = '<div class="post">';
  post +=      '<h1>' + title + '</h1>';
  post +=      '<div class="content">' + content + '</div>';
  post +=    '</div>';
  $('#posts').append(post);
}