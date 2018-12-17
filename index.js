
module.exports = str => {
	var hex = ''
  for (var i = 0, l = str.length; i < l; i++) {
    hex += str.charCodeAt(i).toString(16)
  }
  return hex
}
