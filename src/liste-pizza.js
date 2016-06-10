import Dexie from 'dexie'

export default class ListePizza {
  constructor () {
    this.db = new Dexie('pizzeria')
    this.db.version(1).stores({
      pizzas: '++id, nom'
    })
  }

  addPizza (pizza) {
    return this.db.pizzas.add(pizza)
  }

  contenant (garniture) {
    /*
    return (this.pizzas.filter(function (value, index, array) {
      return value.contient(garniture)
    }))
    */
    return null // à faire
  }
}
