var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
var wins = 0;
var loses = 0;
var userTallyScore;
var crystalvalue;


  
  
  
   function initializevariables() {

   	
	crystalvalue =Math.floor(Math.random() * 120) + 19;

  gemOneValue = Math.floor(Math.random() * 12 + 1);

	gemTwoValue = Math.floor(Math.random() * 12 + 1);

	gemThreeValue = Math.floor(Math.random() * 12 + 1);

	gemFourValue = Math.floor(Math.random() * 12 + 1);

	
	userTallyScore = 0;

	
   	$("#chosennumber").html("Random Number:  " + crystalvalue);
   	$("#totalpoints").html("Total Points:  " + userTallyScore);

  	};

  	
  	function wonorlost() {
      if(userTallyScore == crystalvalue) {
        console.log("You Win");
        wins++;
        $("#wins").text("Wins:  " + wins);
        alert("You Win");

        
        initializevariables();
      }

      else if(userTallyScore >crystalvalue) {
        console.log("you loose");
        loses++;
        $("#loses").text("Loses:  " + loses);
        alert("You lost");

		
        initializevariables();
      }
    };
   	
   
   	initializevariables();
  
  	
    $(".gem").on("click", function() {

		
		var pressed = $(this).attr("value");

		
        console.log(pressed);
        if (pressed == "gem1") {
        	userTallyScore += gemOneValue;
        } 

        else if (pressed == "gem2") {
        	userTallyScore += gemTwoValue;
        } 

        else if (pressed == "gem3") {
        	userTallyScore += gemThreeValue;
        } 

        else if (pressed == "gem4") {
        	userTallyScore += gemFourValue;
        } 
        
        
  		$("#totalpoints").html("Total Points:  " + userTallyScore);

  		
  		wonorlost();
	});