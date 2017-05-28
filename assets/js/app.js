// $("#myModal").modal();   AUTO-SHOW
// 

var inputTitle = document.getElementById("input-title"),
	labTitle = document.getElementById("title-lab"),
	inputText = document.getElementById("input-texta"),
	labText = document.getElementById("texta-lab");

inputTitle.addEventListener('click', function moveLabel(){
	// inputTitle.classList.remove('validate');
	// inputTitle.classList.add('valid');
	labTitle.classList.add('active');
	labText.classList.remove('active');
	if(inputTitle.value.length>10){
		inputTitle.classList.remove('valid');
		inputTitle.classList.add('invalid');
	}
});

inputText.addEventListener('click',function moveLabel2(){
	labTitle.classList.remove('active');
	labText.classList.add('active');
})

