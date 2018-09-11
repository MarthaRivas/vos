var crel = require('crel')

function renderHeader() {
  return crel('div', 
  crel ('img',{src: "image/vosblik.jpg" } ))
 }

 function renderFooter() {
  return crel('address', 'Martha')
 }
  



function renderVos(vos) {
 
  return crel ('div',
  crel ('h1', vos.naam),
  crel ('h2', vos.soort ),
  crel ('p', vos.Kenmerken),
  crel ('p2', vos.beschrijving),
  crel ('img',{src : vos.img}),
  )
  
}


function renderVossen(vossen) {
 
 return crel ('div',
 vossen.map(renderVos))
 
}
function renderApp(vossen) {
  return crel('div',
    renderHeader(),
    renderVossen(vossen),
    renderFooter())
 }




module.exports = renderApp
  


//renderHeader (navigator),
//renderVossen(vossen),
