var arr =[0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7];
var compareArr = [];
var count = 0;
var oldVal;
var isMatch = false;
var isplayBtnClicked = false;

//shuffle elements randomly
function shuffle(arr){
	var currentIndex = arr.length;
	var temporaryValue;
	var randomIndex;

	//While three reamin element s to shuffle...
	while( 0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element
		temporaryValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temporaryValue;
	}
	return arr;
}

function toggleText(){
	$('.boardBtn').click(function(){

		var anObj = {};
			anObj.index = $(this).attr('id');
		// Change the color of text to black
		$(this).css("color", "black");

		$(this).text(function(){
			// Get the id of button from the array
			var idVal = $(this).attr('id');

			// Get the value of button
			var preVal = $(this).text();

			// Compare with default text to show/hide text
			if (preVal == "#"){
				$(this).text(arr[idVal]);
				oldVal = $(this).text();
			} else {
				$(this).text("#");
			}
		});
		
		anObj.val = oldVal;
		compareArr.push(anObj);
		count++;
		console.log(compareArr);
		if(count == 2){
			console.log(compareArr);
			compareArrElem();
			count = 0;
		}

			
	});
}

function hideText(){
	$('.boardBtn').css("color", "transparent");
}

function compareArrElem(){
	if ((compareArr[0].val == compareArr[1].val) && (compareArr[0].index !== compareArr[1].index)){
		isMatch = true;
		console.log("Win");
		compareArr = [];
	} else if (compareArr[0].val !== compareArr[1].val){
		console.log(compareArr);
		isMatch = false;

		setTimeout(function(){
			$('#' + compareArr[0].index).text("#");
			$('#' + compareArr[1].index).text("#");
			compareArr = [];
			//$('#' + array[1].index).text("#");
		}, 500);
	}
}




// Main function
$(function(){
	$('.playBtn').click(function(){
		$('.header').hide();
		$('.gameBoard').show();
		shuffle(arr);
		console.log(arr);
		//assignText(tempArr);
		//hideText();
		toggleText();
	});
})