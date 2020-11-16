// advanceSidebar() scrolls the sidebar down to match the currently
// active link.
function advanceSidebar(){
	let activeLink = document.getElementsByClassName("active")[0];
	let sidebar = document.getElementsByClassName("sidebar")[0];

	sidebar.scrollTop = activeLink.offsetTop;
}

// Call the advanceSidebar() function when the page loads.
window.addEventListener("load", advanceSidebar, false);