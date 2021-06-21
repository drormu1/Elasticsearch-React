const express = require("express");
const app = express();
const os = require('os');
const bodyParser = require("body-parser");
const assert = require('assert');
const cors = require('cors');
const Controller = require("./Elastic/controller");
const Settings = require("./Config/settings");
const Load = require("./Loaders/load");

const controller = new Controller()

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json()); 

app.get('/', (req, res) => {
   const results = controller.search();   
    res.status(200).send(controller.test());
  });
 
 //http://localhost:3000/load?file=todos
 //http://localhost:3000/load?file=youtubes
 //http://localhost:3000/load?file=employees
 //http://localhost:3000/load?file=comments
 //companies

 
 //city_inspections
 //books
 
//restaurant


app.get("/load",function(req,res){ 
  load = new Load();
  let result = load.insert(req);
  res.status(200).send(result);   
});  


  app.get('/init', (req, res, next) => {
      
      var user = os.userInfo().username ;
      console.log(user);
      var path = require('path');
      var user = {loginName:process.env['USERPROFILE'].split(path.sep)[2] , displayName:"דרור מוסאי"};
     
      var loginId = path.join("domainName",user.loginName);
      
      console.log(loginId);
      controller.getAllAggregations()
      .then(data=> {   
       
        indices = data.map(a=>a.index);
        res.status(200).send({user,indices,indicesInfo:Settings.general, allAggregations:data});
      });
      
  });

  app.post('/search', (req, res, next) => {  
   
    res.header('Content-Type', 'application/json');
    controller.searchAsync(req)
      .then((r)=>{
        debugger;
       // console.log(r);
        res.status(200).send(r);        
      })
      .catch((e)=>{ 
        console.log(chalk.re.bgRed(e)); 
       // console.error('search: ', e)
        res.status(500).send(e.body)
      })
  });

 
  app.get('/searchNonActives', (req, res, next) => {  

    res.header('Content-Type', 'application/json');
    controller.searchNonActives(req)
      .then((r)=>{
       // console.log(r);
        res.status(200).send(r);        
      })
      .catch((e)=>{ 
        console.log(chalk.re.bgRed(e)); 
       // console.error('search: ', e)
        res.status(500).send(e.body)
      })
  });

  app.get('/autocomplete', (req, res, next) => {     
    res.header('Content-Type', 'application/json');
    controller.autocompleteAsync(req)
      .then((r)=>{
       // console.log(r);
        res.status(200).send(r);        
      })
      .catch((e)=>{ 
        console.log(e); 
       // console.error('search: ', e)
      
        res.status(500).send(e.body)
      })
  });

  app.get('/indices', (req, res, next) => {  

    res.header('Content-Type', 'application/json');
    controller.indices()
      .then((r)=>{
       // console.log(r);
        res.status(200).send(r);        
      })
      .catch((e)=>{ 
        console.log(e); 
       // console.error('search: ', e)
        res.status(500).send(e.body)
      })
  });
 
app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:${3001}`);
  });
 
