$(document).ready(function(){
  // add 30 more rows to the table
  var row = $('table > tbody > tr:first');
  var table = $('table > tbody');
  for (i=0; i<30; i++) {
    table.append(row.clone());
  }
  // make the header fixed on scroll

});
