var url = "http://localhost:3000/";

var userNamesLB = [];
var userScoresHardLB = [];
var userScoresEasyLB = [];
var userIDsLB = [];

window.onload = function(){
	$.get(url, function(data){
		var z = JSON.parse(data);

		for(var i=0; i<z.userNames.length;i++){
			userNamesLB[i]=z.userNames[i];
		}

		for(var i=0; i<z.userScoresHard.length;i++){
			userScoresHardLB[i]=z.userScoresHard[i];
		}

		for(var i=0; i<z.userScoresEasy.length;i++){
			userScoresEasyLB[i]=z.userScoresEasy[i];
		}

		for(var i=0; i<z.userIDs.length;i++){
			userIDsLB[i]=z.userIDs[i];
		}
	});

	setTimeout(function(){
		sortEasy();
		document.getElementById("first-name-easy").innerHTML = userNamesLB[0];
		document.getElementById("first-score-easy").innerHTML = userScoresEasyLB[0];

		document.getElementById("second-name-easy").innerHTML = userNamesLB[1];
		document.getElementById("second-score-easy").innerHTML = userScoresEasyLB[1];

		document.getElementById("third-name-easy").innerHTML = userNamesLB[2];
		document.getElementById("third-score-easy").innerHTML = userScoresEasyLB[2];

		document.getElementById("fourth-name-easy").innerHTML = userNamesLB[3];
		document.getElementById("fourth-score-easy").innerHTML = userScoresEasyLB[3];

		document.getElementById("fifth-name-easy").innerHTML = userNamesLB[4];
		document.getElementById("fifth-score-easy").innerHTML = userScoresEasyLB[4];

		if(userScoresEasyLB[0]==undefined || userScoresEasyLB[0]==0){
			document.getElementById("first-name-easy").innerHTML = "---";
			document.getElementById("first-score-easy").innerHTML = "---";
		}

		if(userScoresEasyLB[1]==undefined || userScoresEasyLB[1]==0){
			document.getElementById("second-name-easy").innerHTML = "---";
			document.getElementById("second-score-easy").innerHTML = "---";
		}

		if(userScoresEasyLB[2]==undefined || userScoresEasyLB[2]==0){
			document.getElementById("third-name-easy").innerHTML = "---";
			document.getElementById("third-score-easy").innerHTML = "---";
		}

		if(userScoresEasyLB[3]==undefined || userScoresEasyLB[3]==0){
			document.getElementById("fourth-name-easy").innerHTML = "---";
			document.getElementById("fourth-score-easy").innerHTML = "---";
		}

		if(userScoresEasyLB[4]==undefined || userScoresEasyLB[4]==0){
			document.getElementById("fifth-name-easy").innerHTML = "---";
			document.getElementById("fifth-score-easy").innerHTML = "---";
		}

		sortHard();
		document.getElementById("first-name-hard").innerHTML = userNamesLB[0];
		document.getElementById("first-score-hard").innerHTML = userScoresHardLB[0];

		document.getElementById("second-name-hard").innerHTML = userNamesLB[1];
		document.getElementById("second-score-hard").innerHTML = userScoresHardLB[1];

		document.getElementById("third-name-hard").innerHTML = userNamesLB[2];
		document.getElementById("third-score-hard").innerHTML = userScoresHardLB[2];

		document.getElementById("fourth-name-hard").innerHTML = userNamesLB[3];
		document.getElementById("fourth-score-hard").innerHTML = userScoresHardLB[3];

		document.getElementById("fifth-name-hard").innerHTML = userNamesLB[4];
		document.getElementById("fifth-score-hard").innerHTML = userScoresHardLB[4];

		if(userScoresHardLB[0]==undefined || userScoresHardLB[0]==0){
			document.getElementById("first-name-hard").innerHTML = "---";
			document.getElementById("first-score-hard").innerHTML = "---";
		}

		if(userScoresHardLB[1]==undefined || userScoresHardLB[1]==0){
			document.getElementById("second-name-hard").innerHTML = "---";
			document.getElementById("second-score-hard").innerHTML = "---";
		}

		if(userScoresHardLB[2]==undefined || userScoresHardLB[2]==0){
			document.getElementById("third-name-hard").innerHTML = "---";
			document.getElementById("third-score-hard").innerHTML = "---";
		}

		if(userScoresHardLB[3]==undefined || userScoresHardLB[3]==0){
			document.getElementById("fourth-name-hard").innerHTML = "---";
			document.getElementById("fourth-score-hard").innerHTML = "---";
		}

		if(userScoresHardLB[4]==undefined || userScoresHardLB[4]==0){
			document.getElementById("fifth-name-hard").innerHTML = "---";
			document.getElementById("fifth-score-hard").innerHTML = "---";
		}		
	},10);
}

function sortEasy(){
	for(var j=0; j<userScoresEasyLB.length; j++){		
		for(var k=0; k<userScoresEasyLB.length-1; k++){
			if(userScoresEasyLB[k]<userScoresEasyLB[k+1]){
				var temp = userScoresEasyLB[k];
				userScoresEasyLB[k] = userScoresEasyLB[k+1];
				userScoresEasyLB[k+1] = temp;

				var temp2 = userNamesLB[k];
				userNamesLB[k] = userNamesLB[k+1];
				userNamesLB[k+1] = temp2;

				var temp3 = userScoresHardLB[k];
				userScoresHardLB[k] = userScoresHardLB[k+1];
				userScoresHardLB[k+1] = temp3;

				var temp4 = userIDsLB[k];
				userIDsLB[k] = userIDsLB[k+1];
				userIDsLB[k+1] = temp4;
			}
		}
	}
}

function sortHard(){
	for(var m=0; m<userScoresHardLB.length; m++){		
		for(var n=userScoresHardLB.length-1; n>0; n--){
			if(userScoresHardLB[n]>userScoresHardLB[n-1]){
				var temp5 = userScoresEasyLB[n];
				userScoresEasyLB[n] = userScoresEasyLB[n-1];
				userScoresEasyLB[n-1] = temp5;

				var temp6 = userNamesLB[n];
				userNamesLB[n] = userNamesLB[n-1];
				userNamesLB[n-1] = temp6;

				var temp7 = userScoresHardLB[n];
				userScoresHardLB[n] = userScoresHardLB[n-1];
				userScoresHardLB[n-1] = temp7;

				var temp8 = userIDsLB[n];
				userIDsLB[n] = userIDsLB[n-1];
				userIDsLB[n-1] = temp8;
			}
		}
	}
}

