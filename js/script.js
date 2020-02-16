function checkDay() {
  var d = new Date();
  var userDate = document.getElementById("date").value;
  var userMonth = document.getElementById("month").value;
  var userYear = document.getElementById("year").value;
  d.setDate(parseInt(userDate));
  d.setMonth(parseInt(userMonth));
  d.setFullYear(parseInt(userYear));
  var day = d.getDay();
  if (day === 0) {
    return "Sunday";
  } else if (day) === 1) {
    return "Monday";
  } else if (day === 2) {
    return "Tuesday";
  } else if (day === 3) {
    return "Wednesday";
  } else if (day === 4) {
    return "Thursday";
  } else if (day === 5) {
    return "Friday";
  } else if (day === 6) {
    return "Saturday";
  }
}