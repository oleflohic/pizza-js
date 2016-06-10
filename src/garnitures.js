export const garnitures = [
  'SAUCE_TOMATE',
  'MOZZARELLA',
  'CHAMPIGNONS',
  'JAMBON',
  'OEUFS',
  'ARTICHAUT',
  'OLIVES_VERTES',
  'OIGNON',
  'MAIS',
  'POIVRONS_VERTS',
  'OLIVES_NOIRES',
  'POIS',
  'SALAMI'
]

const garnituresFr = {
  'SAUCE_TOMATE':   'sauce tomate',
  'MOZZARELLA':     'mozzarella',
  'CHAMPIGNONS':    'champignons',
  'JAMBON':         'jambon',
  'OEUFS':          'œufs',
  'ARTICHAUT':      'artichaut',
  'OLIVES_VERTES':  'olives vertes',
  'OIGNON':         'oignon',
  'MAIS':           'maïs',
  'POIVRONS_VERTS': 'poivrons verts',
  'OLIVES_NOIRES':  'olives noires',
  'POIS':           'pois',
  'SALAMI':         'salami'
}

const garnituresEn = {
  'SAUCE_TOMATE':   'tomato sauce',
  'MOZZARELLA':     'mozzarella',
  'CHAMPIGNONS':    'mushrooms',
  'JAMBON':         'ham',
  'OEUFS':          'eggs',
  'ARTICHAUT':      'artichoke',
  'OLIVES_VERTES':  'green olives',
  'OIGNON':         'onion',
  'MAIS':           'sweet corn',
  'POIVRONS_VERTS': 'green pepper',
  'OLIVES_NOIRES':  'black olives',
  'POIS':           'peas',
  'SALAMI':         'salami'
}

export const LANGUES = {
  'fr': garnituresFr,
  'en': garnituresEn
}

export function getNomSelonLangue (garniture, langue) {
  if (garniture instanceof Array) {
    return garniture.map(codeGarniture => LANGUES[langue][codeGarniture])
  } else {
    return LANGUES[langue][garniture]
  }
}
