var fs  = require("fs")

class Visitor {
    constructor (full_name, age, date_of_visit, time_of_visit, comments, assistor) {
        this.full_name = full_name
        this.age = age
        this.date_of_visit = date_of_visit
        this.time_of_visit = time_of_visit
        this.comments = comments
        this.assistor = assistor
    }

    save() {

        var i;
         i = 0;

         while (fs.existsSync(`visitor_${i}.json`)) {
             console.log(`this file visitor_${i}.json already exist!`);
            //  break;
            i++;

         }

        // do{i++}while(fs.exists(`visitor_${i}.json`));
 
         var write_info = `visitor_${i}.json`;
         fs.writeFile(write_info, jsonContent, function (err) {
             if (err)
                 throw err;
             console.log('is now Saved!');
             return true;
         });
 

        let names = this.full_name.toLowerCase().replace(" ","_")

        var jsonContent = JSON.stringify(this, null, 4)

        fs.writeFile(`visitor_${names}.json`, jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
        })
    }

    load(iterator){
    
        if(isNaN(iterator)){

            console.log("hey");
            
            iterator = this.full_name.replace(' ', '_').toLowerCase();
            var strFile = fs.readFileSync(`visitor_${iterator}.json`, 'utf8');
            console.log(strFile);
            
        }else{

        var strFile = fs.readFileSync(`visitor_${iterator}.json`, 'utf8');
        console.log(strFile);
        
        }

        // var strFile = fs.readFileSync(`visitor_${args}.json`, 'utf8');
        // console.log(strFile);


    }
}

let c = new Visitor("Aa", 55, "22/03/2015","22:30", "Rude security guy", "security")
c.save()
// c.load(1)
let a = new Visitor("Allie", 18, "22.03.1995", "21;32", "Place is nice", "Thandiwe")
a.save()
// a.load(2)
let b = new Visitor("Thabang",22,"21/11/2019","19:36","Nice air", "neo")
b.save()
let s = new Visitor("Kay AA", 19, 66, 56564, "bad place", "kenny")
// b.load(3)
s.save()
// console.log(load("aa"))
