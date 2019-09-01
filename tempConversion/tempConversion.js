const ftoc = function(arr) {
var temp = 5/9*(arr-32);


return Math.round(temp*10)/10;
}

const ctof = function(arr) {
  var temp = 9/5*(arr)+32;


  return Math.round(temp*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
