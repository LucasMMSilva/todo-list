const { INTEGER } = require('sequelize');
const Todo = require('../models/Todo')
module.exports = class TodoController{
    static async showHome(req,res){
        const list = await Todo.findAll({raw:true});
        const url = req.url;
        list.forEach((item)=>{
            item.url = url;
        });
        res.render('home',{list});
    }
    static async createTask(req,res){
        const title = req.body.title;
        const task= {
            title : title,
            done : false
        }
        await Todo.create(task).then().catch((err)=>console.log(err));
        res.redirect('/');
    }
    static async check(req,res){
        const id = req.body.id;
        const done = req.body.done;
        const url = req.body.url;
        const task = {
            done: done === '0' ? true : false
        }
        await Todo.update(task,{where:{id:id}});
        res.redirect(url);
    }
    static async deleteTask(req,res){
        const id = req.body.id;
        const url = req.body.url;
        await Todo.destroy({where: {id:id}});
        res.redirect(url);
    }
    static async showCompleted(req,res){
        const list = await Todo.findAll({raw:true,where:{done:true}});
        const url = req.url;
        list.forEach((item)=>{
            item.url = url;
        });
        res.render('home',{list})
    }
    static async showTodo(req,res){
        const list = await Todo.findAll({raw:true,where:{done:false}});
        const url = req.url;
        list.forEach((item)=>{
            item.url = url;
        });
        res.render('home',{list})
    }
    static async editTask(req,res){
        const id = req.body.id;
        const url = req.body.url;
        const task = await Todo.findOne({raw:true,where:{id:id}});
        task.url = url;
        res.render('edit',{task});
    }
    static async updateTask(req,res){
        const id = req.body.id;
        const title = req.body.title;
        const url = req.body.url;
        const task = {
            title : title
        }
        await Todo.update(task,{where:{id:id}})
        res.redirect(url);
    }
}