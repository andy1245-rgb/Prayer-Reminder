var deeds = ["Donate to Charity", "Do volunteer work to help the poor", "Help a friend in need.","Buy a gift for your mother or grandmother","Teach an elderly person to use a computer to surf the Internet or write e-mails.","Donate an old cell phone.","Offer to cook or clean for the family","Offer to cook or clean for the family", "Donate blood.","Take food to a new neighbor.","Take part in a literacy program, to help children or adults learn to read.","Volunteer at a soup kitchen.","Adopt a shelter animal.","When you are out buying food, purchase an extra item to donate to a food pantry or to a homeless person."];
try {
  var deedno = $.cookie("#Score");
}
catch {

}
var deedno = 0;
var name = "asdfsd";
var deeddone = false;
$(document).ready(function() {
	$("#target").change(function(){
		name = $("#target");
		alert(name);
	});
	$('roll').click(function(){
		deeddone = false;
		var deedselect = "Current Deed = " + deeds[Math.round(Math.random()*13)];
		$("#CuDe").text(deedselect);
		
	});
	$('#done').click(function(){
		if (deeddone == false){
			deeddone = true;
			deedno = deedno + 1;
			$("#Countr").text("Deeds Done " + deedno.toString());
		}
	});
	$('#save').click(function(){
		$.cookie("Score", deedno.toString());
		
		
	});
	function nameReplace(){
		//if ()
	}
});