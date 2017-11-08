/**
 *Middleware Controller pour les todos
 */
let {Controller} = require('./AbstractController');
let TodoController = new Controller('../service/TodoService');

module.exports=TodoController.getRouter();

// let express = require('express');
// let router = express.Router();
// let todoService = require("../service/TodoService");
//
//
// router.get('/',(request, response)=>{
//     console.log('request.session',request.session);
//     todoService.selectAll(function (dbData) {
//         response.json(dbData)
//     });
//
// });
// router.get('/:id',(request, response)=>{
//     todoService.selectOneById(request.params.id, function(selected) {
//         response.json(selected)
// });
// });
// //find by title
// router.get('/search/:titre',(request,response)=>{
//     todoService.findByTitle(request.params.titre,function (selected) {
//         response.json(selected);
//     });
// });
//
// router.put('/',(request, response)=>{
//     let data =request.body;
//     if(request.body.length && request.body.length >0){
//         todoService.addMany(data, function (databack){
//             data.id = databack.insertId;
//             response.json(data);
//             console.log("add many")
//         })
//     }else{
//         todoService.addOne(data, function (databack) {
//             data.id = databack.insertId;
//             response.json(data);
//             console.log('add one')
//         });
//     }
// });
//
// router.post('/',(request, response)=>{
//     response.send("update todos")
// });
// router.delete('/',(request, response)=>{
//     // si request.body.lenght est >0
//     //cas 1 =>request.body = {id:4};
//     //cas 2 =>request.body = [{id:4},{id:3},{id:2}];
//     if(request.body.length && request.body.length >0){
//         let ids = [];
//         for(let i = 0; i<request.body.length; i++){
//             ids.push(request.body[i].id)
//         }
//         //delete many
//         todoService.deleteMany(ids, function(){
//             console.log(arguments[0]);
//             response.send("delete Many todos")
//         });
//     }else{
//         innerDelete(request.body.id, response)
//         // {
//         //     console.log(arguments[0]);
//         //     response.send("delete one todos")
//         // });
//     }
// });
//
// router.delete('/:id',(request, response)=>{
//     innerDelete(request.params.id, response);
//
// });
// let innerDelete=(id, response)=>{
//     todoService.deleteOne(id,function () {
//         console.log(arguments[0]);
//         response.send("delete one todo")
//     })
// };
//
// // router.put('/',(request, response)=>{
// //     // si request.body.lenght est >0
// //     //cas 1 =>request.body = {id:4};
// //     //cas 2 =>request.body = [{id:4},{id:3},{id:2}];
// //     if(request.body.length && request.body.length >0){
// //         let res =[];
// //         for(let i = 0; i<request.body.length; i++){
// //             let data=request.body[i];
// //             todoService.addOne(data, function(p){
// //                 res.push(p);
// //                 if(i==request.body.length-1){
// //                     response.json(res);
// //                     console.log("add many")
// //                 }
// //             });
// //         }
// //     }else{
// //         let data =request.body;
// //         todoService.addOne(data, function (databack) {
// //             data.id = databack.insertId;
// //             response.json(data);
// //             console.log('add one')
// //         });
// //     }
// // });
//
// //es5
// // var innerDelete= function (id, response){
// //     todoService.deleteOne(id,function () {
// //         console.log(arguments[0]);
// //         response.send("delete one to-do")
// //     })
// // };
//
// module.exports = router;