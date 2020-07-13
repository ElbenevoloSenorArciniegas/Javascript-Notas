//Switch

const metodo_pago = 'efectivo';

switch(metodo_pago){
	case 'efectivo':
		console.log(`El usuario pagó con ${metodo_pago}`);
		break;
	case 'cheque':
		console.log(`El usuario pagó con ${metodo_pago}`);
		break;
	case 'tarjeta':
		console.log(`El usuario pagó con ${metodo_pago}`);
		break;
	case 'bitcoin':
		console.log(`El usuario pagó con ${metodo_pago}`);
		break;
	default:
		console.log('metodo de pago no soportado');
		break;
}

const fecha = new Date();
console.log(fecha.getMonth());
let mes;
switch(fecha.getMonth()){
	case 0:
		mes = 'enero';
		break;
	case 1:
		mes = 'febrero';
		break;
	case 2:
		mes = 'marzo';
		break;
	case 3:
		mes = 'abril';
		break;
	case 4:
		mes = 'mayo';
		break;
	case 5:
		mes = 'junio';
		break;
	case 6:
		mes = 'julio';
		break;
	case 7:
		mes = 'agosto';
		break;
	case 8:
		mes = 'septiembre';
		break;
	case 9:
		mes = 'octubre';
		break;
	case 10:
		mes = 'noviembre';
		break;
	default:
		mes = 'diciembre'
		break;
}

console.log(`Este mes es ${mes}`);
