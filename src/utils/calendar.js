export function displayCalendar(timeString) {
  var currentDate = new Date()
  // Adjust for Vietnam timezone (UTC+7)
  currentDate.setUTCHours(currentDate.getUTCHours() + 7)
  var hours = currentDate.getUTCHours()
  var minutes = currentDate.getUTCMinutes()
  var date = currentDate.getUTCDate()
  var monthIndex = currentDate.getUTCMonth() // Get the month index (0-11)
  var year = currentDate.getFullYear() // Get the current year
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var month = months[monthIndex]
  var ampm = hours >= 12 ? 'PM' : 'AM' // Determine AM or PM
  hours = hours % 12 // Convert to 12-hour format
  hours = hours ? hours : 12 // Handle midnight
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  var dateSuffix = getDateSuffix(date) // Get the ordinal suffix for the date
  var dateString = date + dateSuffix
  timeString = dateString + ' ' + month + ' ' + year + ', '+ hours + ':'+ minutes + ampm
  return timeString
}

// Function to get the ordinal suffix for a date (e.g., 1st, 2nd, 3rd, etc.)
function getDateSuffix(date) {
  if (date >= 11 && date <= 13) {
    return 'th'
  }
  switch (date % 10) {
  case 1: return 'st'
  case 2: return 'nd'
  case 3: return 'rd'
  default: return 'th'
  }
}

setInterval(displayCalendar, 1000) // Update every second
