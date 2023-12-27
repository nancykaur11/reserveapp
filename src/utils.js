// utils.js
export function calculateTimeDuration(startTime, endTime) {
    const startParts = startTime.split(":");
    const endParts = endTime.split(":");
    const startHours = parseInt(startParts[0], 10);
    const startMinutes = parseInt(startParts[1], 10);
    const endHours = parseInt(endParts[0], 10);
    const endMinutes = parseInt(endParts[1], 10);
  
    let hours = endHours - startHours;
    let minutes = endMinutes - startMinutes;
    if (minutes < 0) {
      hours -= 1;
      minutes += 60;
    }
    return `${hours}hrs ${minutes}mins`;
  }
  