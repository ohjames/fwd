function getBound(classOrObject, args) {
  if (classOrObject instanceof Function) {
    return args.length === 0 ? classOrObject : classOrObject.bind(null, ...args)
  }
  else {
    var method = args.shift()
    return classOrObject[method].bind(classOrObject, ...args)
  }
}

/**
 * Like _.bind but only forwards the first argument to the bound function.
 * @param {Object|Function} classOrObject Optional "this" parameter.
 * @param {String} [method] - If classOrObject is an object then bind the named
 *                            method to that object.
 * @param {...*} arguments Additional arguments to bind.
 */
export function first(classOrObject, ...args) {
  var bound = getBound(classOrObject, args)
  return function(first) { return bound(first) }
}

/**
 * Like _.bind but never forwards any arguments.
 * @param {Object|Function} classOrObject Optional "this" parameter.
 * @param {String} [method] - If classOrObject is an object then bind the named
 *                            method to that object.
 * @param {...*} arguments Additional arguments to bind.
 */
export function none(classOrObject, ...args) {
  var bound = getBound(classOrObject, args)
  return function() { return bound() }
}
