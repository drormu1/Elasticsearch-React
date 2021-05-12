const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Client } = require('@elastic/elasticsearch');
const logger = require('../Helpers/logger');
const SearchRequest = require('../Models/searchRequest');

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
   
    async indices() {
      const doc=  await this.client.cat.indices({v: true});               
      logger.info(doc.body);
      
    };

    async searchAsync(req) {
      try {  

      const indexAggregations = ["sales_channel", "salesman.name"  ,"status","_id","amount"];
      const indexFields = ["sales_channel^5", "salesman.name"  ,"status","_id","amount"];
      
      const  searchRequest  = new SearchRequest();
      searchRequest.indices=['orders','products'];
      searchRequest.activeIndex= 0; 
      searchRequest.term="gert Cla Gra ";
      searchRequest.page=0;
      searchRequest.size=500;
      searchRequest.andCondition = 'or';
      searchRequest.sortDirection='desc';
      searchRequest.sort='_id';
      searchRequest.filters=[{"key":"status","values":["processed","completed","cancelled"]},
                             {"key":"sales_channel","values":["store","web","phone"]}

    ];

     
      
     
      
      
      
      const doc = await this.client.search({
        index:'orders',
        sort: [searchRequest.sort + ':' +searchRequest.sortDirection],
         body: {        
          size: searchRequest.size,
          from: searchRequest.from, 
          aggs: this.getAggsStr(indexAggregations),
          query : {
            bool:{
              must:this.getQuery(searchRequest,indexFields)}}
         
       }});

       this.logging(doc);      
       return  doc.body.hits.hits;         
      } 
      catch(err) {
        
       logger.error(err.message);
      //console.log(err);
        return err;
      }
     };  
  
     getQuery(searchRequest,indexFields)
    {
      let arr = [];
       arr.push({
        multi_match:{
          fields: indexFields ,
          query:     searchRequest.term,
          lenient: true,
          fuzziness: "AUTO",
          operator:   searchRequest.andCondition
        }});
     
        searchRequest.filters.forEach(f => {        
         arr.push(JSON.parse(`{"terms":{"${f.key}${this.getAggType(f)}":${JSON.stringify(f.values)}}}`));
       })

      return arr;
    }
     getAggType(f)
     {
       let  aggsType='';
       switch("keyword")        
       {
         case "keyword":
           aggsType='.keyword';
           break;
 
         case "number":
         case "datetime":
         default:  
           aggsType='';
           break;
       }
       return aggsType;
     }
 
     getAggSize(agg)
     {
       return 20;
     }
    getAggsStr(filters)
    {
      let str='';
      filters.forEach(f => {
        let isKeyword  = true;                             
         str += `"by_${f}":{"terms":{"field":"${f}${this.getAggType(f)}","size":${this.getAggSize(f)}}},`;
       })
       str = str.slice(0,-1);
       return JSON.parse(`{${str}}`);
       //let str =  filters.map(f=>`"by_${f}":{"terms":{"field":"${f}.keyword","size":20}}`);    
      
    }
  
   

  logging(doc)  
  {
     
    logger.info("*** querry ***");
    logger.info( doc.meta.request.params.body)
   
    logger.info("*** results ***");
    logger.info(doc.body);
  }
  
  // async searchAsyn2() {
  //   try {
                
  //    const doc = await this.client.search({
  //     index:'clients',
  //     // type: '_doc',
  //      body: {
  //       size: 10,
  //       from: 0, 
         
  //      // query: { match: { "gender": "male" }}  
  //       query : {
  //         multi_match: {
  //           fields:  [ "mail", "company^5"  ,"name"],
  //           query:     "kirsten cellers Dunlap CEDWARD",
  //           fuzziness: "AUTO",
  //           operator:   "or" 
  //         }
  //       }  
  //     }
  //      });  
   
  //    return  doc.body.hits.hits;         
  //   } 
  //   catch(err) {
  //     console.log(err);
  //     return err;
  //   }
  //  };





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

//https://www.sitepoint.com/search-engine-node-elasticsearch/

// suggest_term.js

// esClient.suggest({
//   index: 'articles',
//   body: {
//     text: 'text goes here',
//     titleSuggester: {
//       term: {
//         field: 'title',
//         size: 5
//       }
//     }
//   }
// }).then(...)