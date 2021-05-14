var deeds = ["Donate to Charity", "Do volunteer work to help the poor", "Help a friend in need.","Buy a gift for your mother or grandmother","Teach an elderly person to use a computer to surf the Internet or write e-mails.","Donate an old cell phone.","Offer to cook or clean for the family","Offer to cook or clean for the family", "Donate blood.","Take food to a new neighbor.","Take part in a literacy program, to help children or adults learn to read.","Volunteer at a soup kitchen.","Adopt a shelter animal.","When you are out buying food, purchase an extra item to donate to a food pantry or to a homeless person."];
try {
  var deedno = $.cookie("#Score");
}
catch {

}
var audio = new Audio('audio.mp3');
while (true){
setTimeout(function(){alert("Time to Pray or Do a Good Deed");audio.play();}, 1.8e+6);}
var first = true
var deedno = 0;
var name = "asdfsd";
var deedDone = false;
$(document).ready(function() {
	$("#target").click(function(){
		if (first == true){
			first = false
			$("#target").val("")
		}
	});
	$("#target").change(function(){
		name = $("#target").val();

	});
	$('#roll').click(function(){
		deedDone = false;
		var deedselect = "Current Deed = " + deeds[Math.round(Math.random()*13)];
		$("#CuDe").text(deedselect);
		
		
	});
	$('#done').click(function(){
		if (deedDone == false){
			deedDone = true;
			deedno = deedno + 1;
			$("#Countr").text("Deeds Done " + deedno.toString());
		}
	});
	$('#save').click(function(){
		lel = deedno.toString();
		if (deedno > 10){if (deedno < 13){lel = "10"}else{lel="9"}};
		$("#target").val("");
		var id1 = 'clr' + '2';
		eval("var id1 = 'c1r'" + " + '" + lel +"';");
		eval("var id2 = 'c2r'" + " + '" + lel +"';");
		id1 = "#" + id1;
		id2 = "#" + id2;
		$(id1).text(name);
		$(id2).text(deedno);
		
		
	});

});