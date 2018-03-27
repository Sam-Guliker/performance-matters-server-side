var searchItems = function(){
  const searchInput = document.createElement('input')
  const container = document.querySelector('ul')
  

  searchInput.placeholder ="Zoek een gebouw"

  container.prepend(searchInput)

  searchInput.addEventListener('keyup', function(e) {
    	let filter, ul, li, a, i;

    	filter = searchInput.value.toLowerCase();
    	li = container.getElementsByTagName('li');

    	for (i = 0; i < li.length; i++) {
    		a = li[i].getElementsByTagName("a")[0];
    		if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
    			li[i].style.display = "";
    		} else {
    			li[i].style.display = "none";
    		}
    	}
    })
}

searchItems()

module.exports = searchItems
