let {Controller} = require('./AbstractController');
let userController = new Controller('../service/UsersService');
userController.getRouter().post('/login', (request, response)=>{
    userController.getService().login(request.body, function (result){
        if(result){
            request.session.user = {
                login:request.body.email,
                password:request.body.password
            }
        }else{
            response.send('pas de connexion');
        }

    })
});
module.exports=userController.getRouter();
module.exports=userController.getService();