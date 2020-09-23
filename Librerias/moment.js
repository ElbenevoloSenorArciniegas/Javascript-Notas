//https://momentjs.com/


/**Etiquetas html
 * 
 *  <!--Moment js-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>

    <!--Locale, para convertir lasa fechas a español-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/locale/es.min.js" integrity="sha512-tgY2qswcbQir80Vp67s5ZdbKikl99YmVXp3V/C4Acthk4gI29ONbQ+MR8B5tpESkNoa0N1P7HnSuzC6nOflrwA==" crossorigin="anonymous"></script>
 */

 console.log(moment()); //en la consola del navegador se puede echar un vistazo a las funciones que ofrece moment js
 const dia_hoy = new Date();
 moment.locale('es');

 //con moment se le puede pasar un formato específico paras la fecha
 console.log(moment().format('MMMM Do YYYY h:mm:ss a'));
 console.log(moment().format('LLLL', dia_hoy));

 //sumarle 3 dias al calendario actual
 console.log(moment().add(3, 'days',).calendar());