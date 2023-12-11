const selectAllButtons = document.querySelector(".buttons");
const selectInput = document.querySelector(".screen");
const clearButton = document.querySelector(".btn-clear");
const selectEqual = document.querySelector(".btn-equal");


selectAllButtons.addEventListener("click" , function(event) {
	event.preventDefault();
	const currentElement = event.target;
	// console.log(currentElement.classList,"click");
	if (currentElement.classList.contains('btn')){
		// console.log('click on class btn')
		const dataNumAttr = currentElement.getAttribute("data-num");
		selectInput.value += dataNumAttr;
		console.log(dataNumAttr)
	}
})

clearButton.addEventListener("click", function(event) {
	event.preventDefault();
	selectInput.value = "";
})

selectEqual.addEventListener("click", function(event){
	event.preventDefault();
   // console.log(eval(selectInput.value))    
    selectInput.value = eval(selectInput.value);
})