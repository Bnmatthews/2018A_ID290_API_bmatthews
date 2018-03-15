//Main Website: https://dog.ceo/dog-api/#breed


// All Dogs: https://dog.ceo/api/breeds/list/all
// Image: https://dog.ceo/api/breeds/image/random


//return "https://dog.ceo/api/breeds/list";

var url = "https://dog.ceo/api/breeds/list";
var url2 = "https://dog.ceo/api/breed/hound/images";

/*function getList(BreedList){
			return "https://dog.ceo/api/breeds/list";
		}*/

$.getJSON(url, function(result){
      for(var i = 0; i < result.message.length; i++ ){
    
	  

	  $('#dogs').append('<li>' + result.message[i] + '</li>');

	  }

      //('#dogs').append(result.message[0])

 });