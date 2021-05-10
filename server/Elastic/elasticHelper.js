const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Client } = require('@elastic/elasticsearch');

class ElasticHelper {
     dror = "dror mushay" ;
     uri =   "http://localhost:9200";
     indexes = ['clients'];

     client = new Client({
        node: this.uri
      });
      
    
     test = () => {
        return 'Jim';
    };
   


    
     
  
  async searchAsync() {
    try {
                
     const doc = await this.client.search({
      index:'clients',
      // type: '_doc',
       body: {
        size: 10,
        from: 0, 
         
       // query: { match: { "gender": "male" }}  
        query : {
          multi_match: {
            fields:  [ "mail", "company^5"  ,"name"],
            query:     "kirsten cellers Dunlap CEDWARD",
            fuzziness: "AUTO",
            operator:   "or" 
          }
        }  
      }
       });  

     console.log(doc.meta.request.params.body);
     console.log(doc);
     debugger;
     return  doc.body.hits.hits;         
    } 
    catch(err) {
      console.log(err);
      return err;
    }
   };





   searchold =  (req,res) =>{ 
    res.header('Content-Type', 'application/json');
    this.client.search({
     index:'clients',
     type: '_doc',
     q: '*'   
    }, function(error, response){
     if(error){      
       console.log('in error')
      res.status(200).send(error);    
     } else {
      
      let results =  response.body.hits.hits[0]._source.clients;
     
      res.status(200).send(results); 
      
     }
    });
   } 
  }

 
module.exports =ElasticHelper;
