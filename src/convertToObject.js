'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    if (!declaration.trim()) {
      continue;
    }

    const [key, ...valueParts] = declaration.split(':');

    result[key.trim()] = valueParts.join(':').trim();
  }

  return result;
}

module.exports = convertToObject;
