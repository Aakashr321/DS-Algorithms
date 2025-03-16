function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    // Create a new key for the flattened object
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    // Check if the value is an object and not null
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      // Recursively flatten the object
      flattenObject(obj[key], newKey, result);
    } else {
      // Assign the value to the flattened object
      result[newKey] = obj[key];
    }
  }
  return result;
}

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};

const flattened = flattenObject(nestedObject);
console.log(flattened);
