
function requestHandler(req, res){
    User.finById(req.userId)
        .then(function(user){ /* el .then indica lo que debe hacer cuando la consulta finalice y sea exitosa */
            return Tasks.finById(user.tasksId)
        })
        .then(function(tasksQuery){ /* lo que se debe hacer cuando se ejecuta la 2 consulta (Tasks.finById(user.tasksId)) */
            tasksQuery.completed = true;
            return tasksQuery.save();
        })
        .then(function(){
            res.send('tarea completada');
        })                           
        .catch(function(errors){ /* en el caso que genere error, algunas de todas las consultas */
            res.send(errors);
        });
}