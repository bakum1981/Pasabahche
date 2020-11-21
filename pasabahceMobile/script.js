$(document).ready(function() {
	$('.hamburger').click(function(){
		$('.hamburger').toggleClass('is-active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	if(document.querySelector('.item-brend__video')){
		var videoA = function () {this.innerHTML = '<iframe  src="https://www.youtube.com/watch?v=zRCUDjXCfiM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}; 
		document.querySelector('.item-brend__video').addEventListener('click', function (e) { this.removeEventListener('click', videoA, false); videoA.apply(this, arguments); } , false);	
	}

	const cart = this.querySelector('.main__item-cart');
	const rotate = (event) =>  {
		
		const halfHeight = cart.offsetHeight / 2;	
		const halfWidth = cart.offsetWidth / 2;		
			cart.style.transform = 'rotateX('+-(event.offsetY - halfHeight) / 5 + 'deg) rotateY('
		+ (event.offsetX - halfWidth) / 5 + 'deg)';	
	}

	if(cart){
		cart.addEventListener('mousemove', rotate);
	}

	$('.close').click(function(){
		$('.popap').addClass('popap-hide');
	});
	
	let selectInput = $(' .list__input');
	let selectList = $('.select__list');
	$('.select__arrow').click(function(){		
		$('.select__arrow').toggleClass('active');
		selectList.toggleClass('active');
		selectInput.toggleClass('input-select');
	});

	let input = $('.list__input');
	
	let items = $('.select__list-item');
	const selectItem = () => {	
		let input = $('.list__input');
		for(var i=0; i<items.length; i++) {
			var el = items[i];			
		}			
	}

	items.click(function (e){		
		selectList.removeClass('active');
		selectInput.removeClass('input-select');
		input.val(e.target.innerText);		
	});
	
});