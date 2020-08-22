async function requestHandler(req, res){
   try{
        /* await indica que ese codigo va a tomar tiempo de ejecucion */
        /* user es la variable que almacena el resultado de la consulta */
        /* no es necesario agregar esa variable, solo es indicar el await cuando la operacion va a demorar tiempo */
        const user = await User.finById(req.userId);

        const tasksQuery = await Tasks.finById(user.tasksId);

        tasksQuery.completed = true;
        await tasksQuery.save();

        res.send('Tarea completada');
   }catch(errors){ /* con esto hace el manejo de todos los errores */
        res.send(errors);
   }
}