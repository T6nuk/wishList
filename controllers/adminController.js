const date = require('../getDate.js');
const Wish = require('../models/wish');



exports.getMainPage = (req, res) => {
    Wish.fetchWishes(wishes =>{
        let today = date.getTodayDateLong();
        res.render('admin.ejs', {date: today, myWishes: wishes});
    })
};

exports.postNewWish = (req, res) => {
    const newWish = new Wish(req.body.newWish, req.body.newDate)
    newWish.saveWish();

    /*let userTask = req.body.newTask;
    toDoList.push(userTask);
    console.log(toDoList);*/
    res.redirect('/admin');
};


exports.deleteWish = (req, res) => {
    let itemToDelete = req.body.checkbox;
    Wish.deleteWish(itemToDelete);
    res.redirect('/admin');

};