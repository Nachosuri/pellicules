
$.getJSON("php/pellicules_list.php",function(fletnix) {
	
	document.getElementById("preloader").classList.add("out");
	
		
	
	console.log(fletnix);
		for(n=0;n<fletnix.length;n++) {
		
		var score=""
			if (fletnix[n]["puntuacio"]==0){
			score="<img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
			else if (fletnix[n]["puntuacio"]==1){
			score="<img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
			else if (fletnix[n]["puntuacio"]==2){
			score="<img src=img/stars/star_on.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
			else if (fletnix[n]["puntuacio"]==3){
			score="<img src=img/stars/star_on.png><img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
			else if (fletnix[n]["puntuacio"]==4){
			score="<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
			else if (fletnix[n]["puntuacio"]==5){
			score="<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_half.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
			else if (fletnix[n]["puntuacio"]==6){
			score="<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_off.png><img src=img/stars/star_off.png>"}
			else if (fletnix[n]["puntuacio"]==7){
			score="<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_half.png><img src=img/stars/star_off.png>"}	
			else if (fletnix[n]["puntuacio"]==8){
			score="<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_off.png>"}
			else if (fletnix[n]["puntuacio"]==9){
			score="<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_half.png>"}
			else if (fletnix[n]["puntuacio"]==10){
			score="<img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png><img src=img/stars/star_on.png>"}
		
		document.getElementById("movies").innerHTML +=
		"<div class=movies>"+
			"<h3 class=titol>"+fletnix[n]["titol"]+"</h3>"+
			"<p class=director>"+fletnix[n]["director"]+"</p>"+
			"<p>"+fletnix[n]["pais"]+" "+"</p>"+
			"<p>"+fletnix[n]["any"]+"</p>"+
			"<a href='streaming video.html'><img id='cover' src=img/covers/"+fletnix[n]["image"]+".jpg alt='movie on demmand'></a>"+
			"<div class=stars>"+score+"</div>"+"<br>"+"<br>"+"<br>"+"<br>"+
			"<a class='delete' href='php/pellicules_delet.php?id="+fletnix[n]['id']+"'><img src='img/icons/delete.png'></a>"+
			"<a class='infolink' href='https://www.google.com/search?q="+fletnix[n]['titol']+" "+fletnix[n]['director']+"' target=_blank><img src=img/icons/google.png></a>"+
		"</div>";
	}
	
	
});
	
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );

	
	
