function FireBlog(firebaseRef, options) {
  this._firebase = firebaseRef;

  this._articleRef = this._firebase.child('blog-articles');
  this._commentRef = this._firebase.child('blog-comment');

  this._options = options || {};

  this._articleRef = this._firebase.child('article-metadata');
}

FireBlog.prototype.createArticle = function(articleTitle, callback) {

  var newArticleRef = this._articleRef.push();

  var newArticle = {
    id: newArticleRef.key(),
    name: articleTitle
  };

  newArticleRef.set(newArticle, function(error) {
    if (error) {
      callback(error);
      return;
    }
    callback(null, newArticleRef.key());
  });
};


module.exports = FireBlog;
