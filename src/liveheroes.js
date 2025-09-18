

export default function liveHeroes(user){
 let result =user.sort(function(a, b) {
  return b.health - a.health;
});
return result}

