/*
import ListePizza from './liste-pizza.js'
import EditeurPizzaUi from './editeur-pizza.js'

var pizzas = new ListePizza()

var editeurPizzas = new EditeurPizzaUi(document, pizzas)
editeurPizzas.init()
*/

import Pizza from './pizza.js'

import {
  garnitures as garnituresValides,
  getNomSelonLangue as getNomSelonLangue
} from './garnitures.js'

import EditeurPizzaUiV2 from './editeur-pizza-v2.js'


var instancePizza = new Pizza('p1')
instancePizza.addGarniture(garnituresValides.JAMBON)
instancePizza.addGarniture(garnituresValides.SAUCE_TOMATE)

var editeur = new EditeurPizzaUiV2(instancePizza)
editeur.init()

/*
var listeGarnituresDisponibles = document.getElementById('liste_garnitures_disponibles')
var listeGarnitures = document.getElementById('liste_garnitures')

var elementActuel
var nomsGarnitures = getNomSelonLangue(garnituresValides, 'fr')

var i

for (i = 0; i < garnituresValides.length; i++) {
  elementActuel = document.createElement('option')
  elementActuel.value = garnituresValides[i]
  elementActuel.innerText = nomsGarnitures[i].charAt(0).toUpperCase() + nomsGarnitures[i].slice(1)
  listeGarnituresDisponibles.appendChild(elementActuel)
}

for (i = 0; i < garnituresValides.length; i++) {
  listeGarnitures.appendChild(creerLigneGarniture(garnituresValides[i], 'fr', 1))
}
*/



/*
listeGarnitures.appendChild(creerLigneGarniture('CHAMPIGNONS', 'fr', 2))
listeGarnitures.appendChild(creerLigneGarniture('MOZZARELLA', 'fr', 0))
*/

/*
function creerLigneGarniture (garniture, langue, quantite) {
  var res = document.createElement('tr')

  var celluleNom = document.createElement('td')
  celluleNom.innerText = getNomSelonLangue(garniture, langue)
  celluleNom.innerText = celluleNom.innerText.charAt(0).toUpperCase() + celluleNom.innerText.slice(1)

  var celluleSelect = document.createElement('td')
  var select = document.createElement('select')
  var option
  for (var i = 0; i <= 2; i++) {
    option = document.createElement('option')
    if (i === quantite) {
      option.selected = 'selected'
    }
    option.value = i
    option.innerText = i
    select.appendChild(option)
  }

  celluleSelect.appendChild(select)

  res.appendChild(celluleNom)
  res.appendChild(celluleSelect)

  return res
}

*/
