function renderVos(vos) {
  // document.createElement gebruiken om een element aan te maken
  // dat elemt return
}

function renderVossen(vossen) {
  // document.createElement gebruiken om een element aan te maken
  // dat elemt return
  var elem = document.createElement('')
  return elem
}

function init() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1M7NapQMWRXoc_3RsvkK-egsFvCk3UaCsv7mXvvjSdaw/pubhtml',
      callback: function (tabletopData, tabletop) {
        console.log(tabletopData)

        var elem = renderVossen(tabletopData)
        document.body.appendChild(elem)
      },
      simpleSheet: true
    })
   }
   
   window.addEventListener('DOMContentLoaded', init)
