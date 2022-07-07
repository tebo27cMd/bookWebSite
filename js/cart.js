window.onload = function(){
	//cart box
	const iconShopping = document.querySelector('.iconShopping');
	const cartCloseBtn = document.querySelector('.fa-close');
	const cartBox = document.querySelector('.cartBox');
	iconShopping.addEventListener("click",function(){
		cartBox.classList.add('active');
	});
	cartCloseBtn.addEventListener("click",function(){
		cartBox.classList.remove('active');
	});


	

	if(typeof(Storage) !== 'undefined'){

	}else{
		console.log('storage is not working on your browser');
	}
}