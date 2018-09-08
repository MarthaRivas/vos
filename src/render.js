var crel = require('crel')

function renderArticle(article) {
 return crel('div',
   crel('h1', article.title),
   crel('p', article.content)
 )
}

function renderArticles(articles) {
 return crel('div',
   articles.map(renderArticle))
}

function renderPage (articles){
    return crel ('div',
renderHeader (Navigator),
renderArticles (vossen),
renderFooter ())
}
function renderHeader(Navigator) {
    return crel ( 'ul', 'img',
    crel('li',Navigator.link),
    crel('src',Navigator.imag )
    

)
}
module.exports = renderVossen
  


//renderHeader (navigator),
//renderVossen(vossen),
