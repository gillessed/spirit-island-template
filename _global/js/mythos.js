
window.onload = function startMain(){
    const cards = document.querySelectorAll('.card');
    
	for (i = 0; i < cards.length; ++i) {
		cards[i].innerHTML = replaceIcon(cards[i].innerHTML);
	}
}
