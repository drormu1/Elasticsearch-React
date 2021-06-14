const  fs = require('fs');
const Controller = require('../Elastic/controller');

class Load { 
        controller = new Controller();
      

         //http://localhost:3000/load?file=todos
 //http://localhost:3000/load?file=youtubes
 //http://localhost:3000/load?file=employees
 //http://localhost:3000/load?file=comments
 
 //city_inspections
 //books
 //companies
//restaurant

        insert(req)
        {    
           
            let file =  req.query.file; 
               
            var rows = fs.readFileSync('./Loaders/'+ file + '.json', 'utf8');
            rows = rows.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
// remove non-printable and other non-valid JSON chars
                rows = rows.replace(/[\u0000-\u0019]+/g,""); 
                var o = JSON.parse(rows);


            return this.controller.insertSingles( file,o)
        }
}
module.exports = Load;