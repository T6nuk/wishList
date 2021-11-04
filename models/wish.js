const fs = require('fs');
const path = require('path');

//path to the task.json
const pathToFile = path.join(path.dirname(require.main.filename), 'data', 'wish.json');

module.exports = class Wish {
    constructor(description, date){
        this.description = description;
        this.date = date;
    }

    saveWish(){
        fs.readFile(pathToFile, (error, fileContent) =>{
            let wishes = [];

            if(!error){
                wishes = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            wishes.push(this);

            fs.writeFile(pathToFile, JSON.stringify(wishes), (error) => {
                if(error){console.log('Error', error);}
            });

        });
    }
    static fetchWishes(callBack){ //callback, kui midagi kuvada ei ole. salvestab meie fileContent asjad callBacki
        fs.readFile(pathToFile,(error, fileContent) => {
            if (error) {
                callBack([]); //salvestame errori korral tühja massiivi
            }

            callBack(JSON.parse(fileContent));
        });
    }

    //staatiline meetod kustutamiseks 
    static deleteWish(wish){
        fs.readFile(pathToFile, (error, fileContent) =>{ 
            let wishes = []; //massiiv failide salvestamiseks andmetest
            if (!error) {
                wishes = JSON.parse(fileContent);
            }

            //kustutame massiivist tasks ja hiljem 
            for (let i = 0; i < wishes.length; i++){
                if (wishes[i].description === wish) {
                    //delete
                    wishes.splice(i, 1);
                    break;
                }
            }
            //uuendame massiivi
            fs.writeFile(pathToFile, JSON.stringify(wishes), (error) => {
                if(error){console.log('Error', error);}
            });


        });
    }

}
