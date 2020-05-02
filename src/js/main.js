var scrollpos = window.scrollY;
	var header = document.getElementById("header");
document.addEventListener('scroll', function() {

	/*Apply classes for slide in bar*/
	scrollpos = window.scrollY;

    if(scrollpos > 10){
        header.classList.add("bg-gray-300");
        header.classList.add("shadow");
    }
    
    else {
        header.classList.remove("bg-gray-300");
        header.classList.remove("shadow");
    }
    

});      