const search = (id, array) => {
  for (let i=0; i < array.length; i++) {
      if (array[i].id === id) {
          return array[i];
      }
  }
}

const findHeroes = (name, array) => {
  const result = []
  for(let i = 0; i < array.length; i++) {
    if(array[i].name.toLowerCase().indexOf(name.toLowerCase()) != -1) {
        result.push(array[i])
    }
  }
  return result
}

const deleteHero = (id, array) => {
  return array.filter(hero => {
    return hero.id !== id;
  })
}

const updateHero = (hero, array) => {
  array.forEach(item => {
    if(item.id === hero.id) {
      item.name = hero.name
    }
  })
}

module.exports = {
  search,
  findHeroes,
  deleteHero,
  updateHero
};