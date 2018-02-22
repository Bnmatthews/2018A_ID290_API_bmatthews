// API Key: ffbaed99f10375462add667213061774
// String: http://api.openweathermap.org/data/2.5/weather?zip=37072&appid=ffbaed99f10375462add667213061774
var url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
var url2 = "https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe";
var url3 = "https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9";
var url4 = "https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11";
var url5 = "https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d";
var url6 = "https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f";
var url7 = "https://ghibliapi.herokuapp.com/people/591524bc-04fe-4e60-8d61-2425e42ffb2a";
var url8 = "https://ghibliapi.herokuapp.com/people/c491755a-407d-4d6e-b58a-240ec78b5061";
var url9 = "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106";
var url10 = "https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19";
var url11 = "https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a";

$.getJSON(url, function(result){
		$('#ID').html(result.id);
		$('#Title').html(result.title);
		$('#Description').html(result.description);
		$('#Director').html(result.director);
		$('#Producer').html(result.producer);
		$('#ReleaseDate').html(result.release_date);
		$('#rtScore').html(result.rt_score);
	//$('#characterIcon').attr("src","http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/totoro_0.jpg?itok=D4Td2RPp");
	
});
$("#Satsuki").click(function(){
	$.getJSON(url2, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","https://vignette.wikia.nocookie.net/disney/images/b/b9/Satsuki.jpg/revision/latest?cb=20140725154339");
	
	});
});
$("#Mei").click(function(){
	$.getJSON(url3, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","http://ami.animecharactersdatabase.com/uploads/chars/5457-1746252896.jpg");
	
	});
});
$("#Tatsuo").click(function(){
	$.getJSON(url4, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","https://vignette.wikia.nocookie.net/studio-ghibli/images/7/7e/Tatsuo.jpg/revision/latest?cb=20130210103433");
	
	});
});
$("#Yasuko").click(function(){
	$.getJSON(url5, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","https://cdn.anisearch.com/images/character/screen/38/38438/full/277144.jpg");
	
	});
});
$("#Totoro").click(function(){
	$.getJSON(url6, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","https://lumiere-a.akamaihd.net/v1/images/image_b9660bcf.jpeg");
	
	});
});
$("#ChuTotoro").click(function(){
	$.getJSON(url7, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","http://www.howtoamigurumi.com/wp-content/uploads/2015/02/Chu-and-Chibi-Totoro.jpg");
	
	});
});
$("#ChibiTotoro").click(function(){
	$.getJSON(url8, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","https://img00.deviantart.net/d3a1/i/2010/320/3/f/chibi_totoros_by_ticoart-d32ymcx.jpg");
	
	});
});
$("#Catbus").click(function(){
	$.getJSON(url9, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","https://r.hswstatic.com/w_907/gif/stufftoblowyourmind-23-2015-11-catbus-blog.jpg");
	
	});
});
$("#Granny").click(function(){
	$.getJSON(url10, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","https://userscontent2.emaze.com/images/ee5e3eb5-b7ea-486e-9785-a680e729d4eb/fbdb96ba3138445acc1fca79b0208fde.jpg");
	
	});
});
$("#Kanta").click(function(){
	$.getJSON(url11, function(result){
			$('#ID').html(result.id);
			$('#Title').html(result.name);
			$('#Description').html(result.gender);
			$('#Director').html(result.age);
			$('#Producer').html(result.eye_color);
			$('#ReleaseDate').html(result.hair_color);
			$('#characterIcon').attr("src","https://www.animeclick.it/images/serie/TonarinoTotoro/TonarinoTotoro26.jpg");
			$('#characterIcon').fadeIn('5s')
	});
});

