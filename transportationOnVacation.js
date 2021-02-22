// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
// Transportation on vacation
// 8 Kyu


function rentalCarCost(d) {
   if (d >= 3 && d < 7) {
       return (40 * d) - 20
   }
   else if (d >= 7) {
       return (40 * d) - 50
   } else {
       return 40 * d
   }
}