import { Pizza } from './pizza.js'
import { PizzaList } from './liste-pizza.js'
// import { toppings } from './toppings.js'

var pizzaList = new PizzaList()
var pizza = null

var pizzaArea = document.getElementById('pizzaToppings')
var pizzaName = document.getElementById('pizzaName')
var newPizza = document.getElementById('newPizza')
var savePizza = document.getElementById('savePizza')

document.getElementById('toppings').innerHTML = new Pizza().allToppingsToHtml()
Array.prototype.slice.call(document.getElementsByClassName('topping'))
.forEach(li => {
  li.addEventListener('dragstart', evt => {
    evt.dataTransfer.setData('text/html', li.dataset.topping)
  }, false)
})

pizzaArea.addEventListener('dragenter', evt => {
  evt.preventDefault()
  evt.target.style.backgroundColor = 'green'
}, false)

pizzaArea.addEventListener('dragover', evt => {
  evt.preventDefault()
}, false)

pizzaArea.addEventListener('dragleave', evt => {
  evt.preventDefault()
  evt.target.style.backgroundColor = 'blue'
}, false)

pizzaArea.addEventListener('drop', evt => {
  evt.preventDefault()
  pizza.addTopping(evt.dataTransfer.getData('text/html'))
  evt.target.style.backgroundColor = 'silk'
  drawPizza()
}, false)


savePizza.addEventListener('click', evt => {
  if (!pizza) return
  pizza.setName(pizzaName.value)
  pizzaList.savePizza(pizza)
  drawPizzaList()
  pizza = null
  drawPizza()
}, false)

newPizza.addEventListener('click', evt => {
  pizza = new Pizza({ name: 'autre pizza' })
  drawPizza()
})

function drawPizza () {
  if (!pizza) {
    pizzaArea.innerHTML = 'NO PIZZA SELECTED'
    pizzaName.value = ''
    return
  }
  pizzaArea.innerHTML = pizza.toppings2string()
  pizzaName.value = pizza.name
}
drawPizza()

function drawPizzaList () {
  pizzaList.toHtml()
    .then(html => {
      document.getElementById('pizzas').innerHTML = html
      // astuce pour utiliser un NodeList comme un tableau
      Array.prototype.slice.call(document.getElementsByClassName('deletePizza'))
        .forEach(button => {
          button.addEventListener('click', evt => {
            pizzaList.deletePizza(button.dataset.id)
              .then(drawPizzaList)
          })
        })
      Array.prototype.slice.call(document.getElementsByClassName('selectPizza'))
        .forEach(button => {
          button.addEventListener('click', evt => {
            pizzaList.getPizza(button.dataset.id)
              .then(json => {
                pizza = new Pizza(json)
                drawPizza()
              })
          })
        })
    })
}

drawPizzaList()
