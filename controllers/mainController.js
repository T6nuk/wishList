const date = require('../getDate.js');
const Wish = require('../models/wish');



exports.getMainPage = (req, res) => {
    Wish.fetchWishes(wishes =>{
        let today = date.getTodayDateLong();
        res.render('index.ejs', {date: today, myWishes: wishes});
    })
};