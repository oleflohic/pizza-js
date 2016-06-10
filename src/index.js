import ListePizza from './liste-pizza.js'
import EditeurPizzaUi from './editeur-pizza.js'

var pizzas = new ListePizza()

var editeurPizzas = new EditeurPizzaUi(document, pizzas)
editeurPizzas.init()
