export function displayTime() {
  var currentDate = new Date()
  // Adjust for Vietnam timezone (UTC+7)
  currentDate.setUTCHours(currentDate.getUTCHours() + 7)
  var hours = currentDate.getUTCHours()
  var minutes = currentDate.getMinutes()
  var ampm = hours >= 12 ? 'PM' : 'AM' // Determine AM or PM
  hours = hours % 12 // Convert to 12-hour format
  hours = hours === 0 ? 12 : hours // Handle midnight
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  return hours + ':' + minutes + ' ' + ampm
}