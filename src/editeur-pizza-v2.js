import Pizza from './pizza.js'
import {
  garnitures as garnituresValides,
  getNomSelonLangue as getNomSelonLangue
} from './garnitures.js'



export default class EditeurPizzaUiV2 {

  constructor (pizza) {
    this.langue = 'fr'

    this.pizza = pizza ? pizza : new Pizza('')
    this.listeGarnitures = document.getElementById('liste_garnitures')
  }

/*
  creerLigneGarniture (garniture, langue, quantite) {
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

  chargerGarnitures () {
    var quantites = this.pizza.getQuantitesGarnitures()
    
    var ligne
    console.log('ici')
    for (var i = 0; i < quantites.length; i++) {
      ligne = this.creerLigneGarniture(quantites[i].key, 'fr', quantites[i])
      this.listeGarnitures.appendChild(ligne)
    }
  }
  */

  creerOptionGarniture (garniture) {
    var element = document.createElement('div')
    element.class = 'btn'
    element.draggable = 'true'
    element.innerText = garniture // remplace par localisation
    this.listeGarnitures.appendChild(element)
    return element
  }

  init () {
    for (var i = 0; i < garnituresValides.length; i++) {
      this.listeGarnitures.appendChild(this.creerOptionGarniture(garnituresValides[i]))
    }
  }

}
