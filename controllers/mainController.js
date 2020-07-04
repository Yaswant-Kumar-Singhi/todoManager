const todoInfo = require('../models/todoInfo');

module.exports.main = function(req,res){

    todoInfo.find({},function(err,todoInfo){
        if(err){
            console.log(err);
            return ;
        }
        return res.render('todo',{
            title: "Todo List App",
            todoInfo: todoInfo
        });
    });
};
//Delete my todoTask
module.exports.delete = function(req,res){
    todoInfo.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log("Error in delting the task");
            return ;
        }
        return res.redirect('back');
    });
};
