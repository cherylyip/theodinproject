const ftoc = function(temp) {
 let c = (temp - 32) * (5/9);
 return parseFloat(c.toFixed(1));
}

const ctof = function(temp) {
  let f = temp * (9/5) + 32;
  return parseFloat(f.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
