const  fs = require('fs');
const Controller = require('../Elastic/controller');

class Load { 
        controller = new Controller();
      
        insert(req)
        {    
           
            let file =  req.query.file;        
            var rows = JSON.parse(fs.readFileSync('./Loaders/'+ file + '.json', 'utf8'));
            
            return this.controller.insertSingles( file,rows)
        }
}
module.exports = Load;