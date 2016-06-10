import Pizza from './pizza.js'
import {
  garnitures as garnituresValides,
  getNomSelonLangue as getNomSelonLangue
} from './garnitures.js'

/*
export const MODES_EDITEUR = {
  CREATION: 0,
  MODIFICATION: 1
}
*/

export default class EditeurPizzaUi {

  constructor (div, listePizzas, mode) {
    this.champNomPizza = div.getElementById('nom_pizza')
    this.boutonCreerPizza = div.getElementById('creer_pizza')
    this.boutonEnregistrerPizza = div.getElementById('enregistrer_pizza')
    this.boutonAnnuler = div.getElementById('annuler')
    this.zoneIngredients = div.getElementById('zone_ingredients')
    this.pContenuPizza = div.getElementById('contenu_pizza')
    this.pizzaActive = null
    this.pizzas = listePizzas

    // this.mode = mode
  }

  activerEditeurPizza () {
    this.champNomPizza.disabled = 'disabled'
    this.boutonCreerPizza.disabled = 'disabled'
    this.boutonEnregistrerPizza.disabled = null
    this.boutonAnnuler.disabled = null
    var boutonActuel = this.zoneIngredients.childNodes[0]
    while (boutonActuel) {
      boutonActuel.disabled = null
      boutonActuel = boutonActuel.nextSibling
    }
    this.majTexteContenu()
  }

  desactiverEditeurPizza () {
    this.champNomPizza.disabled = null
    this.boutonCreerPizza.disabled = null

    this.boutonEnregistrerPizza.disabled = 'disabled'
    this.boutonAnnuler.disabled = 'disabled'

    var boutonActuel = this.zoneIngredients.childNodes[0]
    while (boutonActuel) {
      boutonActuel.disabled = 'disabled'
      boutonActuel = boutonActuel.nextSibling
    }

    this.majTexteContenu()
  }

  creerPizza () {
    if (this.pizzaActive) {
      throw Error('Pizza déjà en cours de création')
    }
    this.pizzaActive = new Pizza(this.champNomPizza.value)
    this.activerEditeurPizza()
  }

  insererBoutonGarniture (garniture, langue) {
    var bouton = document.createElement('button')
    var contexte = this
    bouton.id = 'bouton_garniture_' + garniture
    bouton.addEventListener('click', function () {
      if (!contexte.pizzaActive) {
        throw Error('Aucune pizza en cours d\'édition')
      }
      contexte.pizzaActive.addGarniture(garniture)
      contexte.majTexteContenu()
    })

    bouton.innerText = getNomSelonLangue(garniture, langue)
    // première lettre en majuscule
    bouton.innerText = bouton.innerText.charAt(0).toUpperCase() + bouton.innerText.slice(1)

    document.getElementById('zone_ingredients').appendChild(bouton)
  }

  chargerBoutons (garnitures, langue) {
    for (var i = 0; i < garnitures.length; i++) {
      this.insererBoutonGarniture(garnitures[i], langue)
    }
  }

  enregistrerPizza () {
    this.pizzas.addPizza(this.pizzaActive).then(res => {
      console.log('Pizza ajoutée', res)
      this.pizzaActive = null
      this.champNomPizza.value = ''
      this.desactiverEditeurPizza()
    }, (err) => {
      console.log('Échec ajout pizza: ' + err)
    })
  }

  majTexteContenu () {
    if (this.pizzaActive) {
      this.pContenuPizza.innerHTML = this.pizzaActive.getListeGarnituresString('fr')
    } else {
      this.pContenuPizza.innerHTML = ''
    }
  }

  annulerEditionPizza () {
    this.pizzaActive = null
    this.champNomPizza.value = ''
    this.desactiverEditeurPizza()
  }

  init () {
    var contexte = this
    this.boutonCreerPizza.addEventListener('click', function (evt) { contexte.creerPizza() })
    this.chargerBoutons(garnituresValides, 'fr')
    this.boutonEnregistrerPizza.addEventListener('click', function (evt) { contexte.enregistrerPizza() })
    this.boutonAnnuler.addEventListener('click', function (evt) { contexte.annulerEditionPizza() })
    this.desactiverEditeurPizza()
  }

}
