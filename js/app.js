var arr =[0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7];
var compareArr = []
var count = 0;
var oldVal;
var isMatch = false;


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
		$(this).css("color", "black");
		$(this).text(function(){
			var idVal = $(this).attr('id');
			var preVal = $(this).text();
			if (preVal == "#"){
				$(this).text(arr[idVal]);
				oldVal = $(this).text();
				
				console.log(oldVal);
			} else {
				$(this).text("#");
			}
		});
		compareArr.push(oldVal);
		count++;
		compareArrElem(compareArr);
	});
}

function hideText(){
	$('.boardBtn').css("color", "transparent");
}

function compareArrElem(array){
	if(count == 2) {
		if(array[0] == array[1]){
			isMatch = true;
			window.alert("Win");
			count = 0;
		} else {
			isMatch = false;
		}
	}
}


// Main function
$(function(){
	var tempArr = shuffle(arr);
	console.log(tempArr);
	//assignText(tempArr);
	//hideText();
	toggleText();


})