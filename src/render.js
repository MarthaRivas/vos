var crel = require('crel')

function renderHeader (navigator) {
  return crel ('img',)
}
function renderVos(vos) {
  console.log (vos)
  return crel ('div',
  crel ('h1', vos.naam),
  crel ('h2', vos.soort ),
  crel ('p', vos.Kenmerken),
  crel ('p2', vos.beschrijving),
  crel ('img',vos.img)
  )
  
}

console.log(renderVos({
  "Kenmerken":"De vossen worden gekenmerkt door de kleinste dieren van de hondenfamilie, ze zijn blind en doof bij de geboorte, dus om zichzelf te beschermen en te overleven, worden ze tijdens de eerste maand van geboorte bewaakt door hun moeder.",
  "Voeden":"Het zijn omnivore generalisten: ze eten een breed scala aan dierlijke en plantaardige voedingsmiddelen.",
  "naam":"Vos",
  "beschrijving":"",
  "img":"http://www.roofdieren.info/content/land/vos/images/vos1.jpg",
  "soort":"Canis Vulpes"
}))

function renderVossen(vossen) {
  console.log (vossen)
 return crel('map', vossen
 )
}
console.log(renderVossen([0,1,2,3]))


module.exports = renderVossen
  


//renderHeader (navigator),
//renderVossen(vossen),
