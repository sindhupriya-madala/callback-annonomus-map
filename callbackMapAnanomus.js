var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
//map returns z value using x,y [x^2 + y^2 = z^2]
//inside map we have callback annonomus function without any name.
var result = input.map(function(element) {
  var z = ( element.x * element.x ) + ( element.y * element.y );
  //console.log(z, Math.sqrt(z));
  return Math.sqrt(z);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);