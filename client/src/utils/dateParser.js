export function parseDate(d) {
    let months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    };
    var parseDate = d.slice(0, 10);
    var year = parseDate.slice(0, 4);
    var month = parseDate.slice(5, 7);
    var day = parseDate.slice(8, 10);
  
    var actualMonth = months[month];
  
    return `${actualMonth} ${day}, ${year}`;
  }