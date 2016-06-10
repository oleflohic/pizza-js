import {
  garnitures as garnituresValides,
  getNomSelonLangue as getNomSelonLangue
} from './garnitures.js'

const ETATS_CUISSON = {PAS_CUITE: 0, EN_CUISSON: 1, CUITE: 2}

class Pizza {

  constructor (nom) {
    this.nom = nom
    this.garnitures = []
    this.etatCuisson = ETATS_CUISSON.PAS_CUITE
  }

  setNom (nom) {
    this.nom = nom
    return this
  }

  addGarniture (garniture) {
    if (garnituresValides.indexOf(garniture) === -1) return this
    if (this.garnitures.filter(t => t === garniture).length > 1) return this
    this.garnitures.push(garniture)
    return this
  }

  removeGarniture (garniture) {
    const pos = this.garnitures.indexOf(garniture)
    if (pos !== -1) {
      this.garniture.splice(pos, 1)
    }
    return this
  }

  getQuantitesGarnitures () {
    var res = {}
    for (var i = 0; i < this.garnitures.length; i++) {
      if (!res[this.garnitures[i]]) {
        res[this.garnitures[i]] = 1
      } else {
        res[this.garnitures[i]]++
      }
    }
    return res
  }

  cuire (temps = 1000) {
    return new Promise((resolve, reject) => {
      if (this.etatCuisson === ETATS_CUISSON.EN_CUISSON) return reject('Pizza déjà en cours de cuisson.')
      if (this.etatCuisson === ETATS_CUISSON.CUITE) return reject('Pizza déjà cuite.')

      this.etatCuisson = ETATS_CUISSON.EN_CUISSON
      setTimeout(() => {
        this.etatCuisson = ETATS_CUISSON.CUITE
        resolve()
      }, temps)
    })
  }

  getListeGarnituresString (langue = 'fr') {
    return getNomSelonLangue(this.garnitures, langue)
  }

}

export default Pizza
