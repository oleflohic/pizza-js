import Dexie from 'dexie'
import {Pizza} from './pizza'

export class PizzaList {
  constructor () {
    this.db = new Dexie('pizzeria')
    this.db.version(1).stores({
      pizzas: '++id, nom'
    })
    this.db.open()
  }

  addPizza (pizza) {
    return this.db.pizzas.add(pizza)
  }

  updatePizza (pizza) {
    return this.db.pizzas.put(pizza)
  }

  savePizza (pizza) {
    if (!pizza.id) return this.addPizza(pizza)
    return this.updatePizza(pizza)
  }

  deletePizza (id) {
    return this.db.pizza.deletePizza(parseInt(id))
  }

  // getPizzas () {
  //   return this.db.pizza.toArray()
  // }

  getPizza (id) {
    return this.db.pizzas.get(parseInt(id))
  }

  toHtml () {
    return this.getPizza()
      .then(pizzas => pizzas.map(json => new Pizza(json)))
      .then(pizzas => pizzas.map(pizza => pizza.toHtml()))
      .then(pizzaRows => `
  <table class ="table">
  ${pizzaRows.join('')}
  `)
  }
}
