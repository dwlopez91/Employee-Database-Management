//alert("Hello");

//create on click event for the submit button
// $("#add-employee-btn").on("click",function(event){
// 	alert("Hello");
// })
var employeeName = "";
var role = "";
var startDate = 0;
var monthlyRate = 0;

$( "#add-employee-btn" ).on("click",function() {
  //alert( "Hello" );
  event.preventDefault();

  employeeName = $("#employee-name-input").val().trim();
  $("#employee-table").append(employeeName);

  role = $("#role-input").val().trim();
  $("#employee-table").append(role);

});