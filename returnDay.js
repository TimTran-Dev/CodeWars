// Return the Day
// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript
// 8 Kyu

function whatday(num) { 
  switch(num) {
      case 1:
      return 'Sunday'
      break;
      case 2:
      return 'Monday'
      break;
      case 3:
      return 'Tuesday'
      break;
      case 4:
      return 'Wednesday'
      break;
      case 5:
      return 'Thursday'
      break;
      case 6:
      return 'Friday'
      break;
      case 7:
      return 'Saturday'
      break;
      default:
      return 'Wrong, please enter a number between 1 and 7'
  }
}