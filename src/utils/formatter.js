/**
 * Capitalize the letters of a string
 */
export const capitalizeLetter = (val) => {
  if (!val) return ''
  return `${val.toUpperCase()}`
}
/**
 * Capitalize the labels_(name) into object LABEL
 */
// Initialize an empty object to store capitalized labels
// Define a function to capitalize labels
export function capitalizeLabels(val) {
  // Initialize an empty object to store capitalized labels
  const capitalizedLabels = {}

  // Loop through the keys of the val object
  for (const key in val) {
    if (Object.hasOwnProperty.call(val, key)) {
      // Capitalize each label using capitalizeLetter function and assign it to the corresponding key in capitalizedLabels
      capitalizedLabels[key] = capitalizeLetter(val[key])
    }
  }
  // Return the object with capitalized labels
  return capitalizedLabels
}


