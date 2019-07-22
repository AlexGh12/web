console.log('------------------------------------');
console.log('------------------------------------');
console.log('------------------------------------');
console.log('------------------------------------');

var BoxInputs = document.getElementsByClassName('input');

for( i=0; i < BoxInputs.length; i++  ){
	var Caja = BoxInputs[i];
	var inputs = BoxInputs[i].getElementsByTagName('input');
	var labels = BoxInputs[i].getElementsByTagName('label');
	if ( inputs.length ){
		var newID = 'input_'+i;
		inputs[0].setAttribute("id",newID);
		labels[0].setAttribute("for",newID);
		console.log(newID);
		var NewElement = document.getElementById(newID);
		NewElement.addEventListener('input',prueba)
	}
}

function prueba() {
	if (this.value){
		this.className = 'On';
	}else{
		this.className = '';
	}
}