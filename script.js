//let textoInicial = document.querySelector('#texto1').value;

function soma1(){
	let textoInicial = document.querySelector('#texto1').value;
	document.querySelector('#texto1').value='';
	var num= (textoInicial).match(/\d{1,20}/);
	var lastIndx=textoInicial.length;


	var numAlterado = (Number(num)+1).toString();
	let texto2;
	let aux=numAlterado.length;

	if(textoInicial===''){
		return;
	}

	else if(Number(num).toString().length!==numAlterado.length){
		
		let aux2=Number(num).toString().length;
		if(num[0].length===aux){
			texto2=textoInicial.substring(0,lastIndx-aux)+numAlterado;
		}
		else if(num[0].length<aux){
			texto2=textoInicial.substring(0,lastIndx-aux2)+numAlterado;
		}
		else{
			texto2= textoInicial.substring(0,lastIndx-aux)+numAlterado;
		}
		add=`<h1>${textoInicial} --> ${texto2}</h1>`;
		return document.querySelector('button').insertAdjacentHTML('afterend',add);

	}
	else if(num===null){
		texto2=textoInicial.substring(0,lastIndx)+numAlterado;
		add=`<h1>${textoInicial} --> ${texto2}</h1>`;
		return document.querySelector('button').insertAdjacentHTML('afterend',add);

	}
	console.log(numAlterado);
	texto2=textoInicial.substring(0,lastIndx-aux)+numAlterado;
	add=`<h1>${textoInicial} --> ${texto2}</h1>`;
	return document.querySelector('button').insertAdjacentHTML('afterend',add);

}
