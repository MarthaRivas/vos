




function renderVos(vos) {
  var div = document.createElement('div')
  var h1 = document.createElement('h1')
  var h2  = document.createElement('h2')
  var p = document.createElement('p')
  var p2 = document.createElement('p')

  var img = document.createElement('img')
  img.src = vos.img

  div.appendChild(h1)
  div.appendChild(img)
  div.appendChild(h2)
  div.appendChild(p)
  div.appendChild(p2)
  
 
  

  var naam = document.createTextNode(vos.naam)
  h1.appendChild(naam)

  var soort = document.createTextNode(vos.soort)
  h2.appendChild(soort)

  var Kenmerken = document.createTextNode(vos.Kenmerken)
  p.appendChild(Kenmerken)

  var Voeden = document.createTextNode(vos.Voeden)
  p2.appendChild(Voeden)
 

  return div
}

function renderVossen(vossen) {
  var div = document.createElement('div')
  for (var i = 0; i < vossen.length; i = i + 1) {
    var vos = vossen[i]
    var component = renderVos(vos)
    div.appendChild(component)
  }
  return div
}

function elem(p){return document.createElement (p)

}

function text (beschrijving) {
  return document.createTextNode (vos.beschrijving)
}

function append (beschrijving) {
return document.childNodes (beschrijving)
}

console.log (append)
function init() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1M7NapQMWRXoc_3RsvkK-egsFvCk3UaCsv7mXvvjSdaw/pubhtml',
      callback: function(tabletopData, tabletop) {
        console.log(tabletopData, tabletop)
      

        var elem = renderVossen(tabletopData)
        document.body.appendChild(elem)
      },
      simpleSheet: true
    })
   }
   
   window.addEventListener('DOMContentLoaded', init)
