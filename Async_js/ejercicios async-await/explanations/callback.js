/*funcion manejador de peticiones */
/* funcion tipica de los servidores de Node */
function requestHandler(req, res){
    /* ej de una consulta a mongo */
    /* esta function (callback) va a esperar por la respuesta de la consulta a la bd, tiene como parametros un posible 
    error, o el usuario(en el caso de que la consulta sea exitosa) */
    User.findById(req.userId, function(err, user){
        /* escribir cualquier codigo que dependa de esta consulta */
        if(err){
            res.send(err);
        }else{
            /* consultar las tareas de ese usuario */
            Tasks.findById(user.taskId, function(err, tasksQuery){ /* otra consulta a la bd, otro callback */
                if(err){
                    return res.send(err);
                }else{
                    /* actualizar datos */
                    tasksQuery.completed = true;
                    tasksQuery.save(function(err){ /* otro callback, consulta a la bd */
                        if(err){
                            return res.send(err);
                        }else{
                            res.send('tarea completada');
                        }
                    })
                }
            })
        }
    });
}  