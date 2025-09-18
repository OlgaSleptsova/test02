import liveHeroes from '../liveheroes.js';

const users =[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

const users2 = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]

test('sort', () => {

    
  result=liveHeroes(users);
  expect(result).toEqual(users2);

  });
