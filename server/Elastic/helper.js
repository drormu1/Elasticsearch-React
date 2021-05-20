const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const chalk = require('chalk');
const { Client } = require('@elastic/elasticsearch');
const logger = require('../Helpers/logger');
const SearchRequest = require('../Models/searchRequest');
const Settings = require("../Config/settings");


class Helper {
     dror = "dror mushay" ;
     uri =   "http://localhost:9200";
     indexes = ['clients'];

     client = new Client({
        node: this.uri
      });
      
    
    
    getSorting(searchRequest)
    {      
      let str = `[{"${searchRequest.sort}":{"order":"${searchRequest.sortDirection}"}}]`;
     // "sort":[{"lines.amount":{"order":"desc"}}]}
      return JSON.parse(str);      
    }
  
    
     getQuery(searchRequest,indexFields)
    {
      let arr = [];
       arr.push({
        multi_match:{
          fields: indexFields,//search fields 
          query:     searchRequest.term,
          lenient: true,
          fuzziness: "AUTO",
          operator:   searchRequest.andCondition
        }});
      //ad aggregations as filters
        searchRequest.filters.forEach(f => {        
         arr.push(JSON.parse(`{"terms":{"${f.key}${this.getAggType(f)}":${JSON.stringify(f.values)}}}`));
       })
    
       // add special aggreagtions
      //  arr.push(JSON.parse(`{"range":
      //  {
      //    "total_amount":{
      //     "gte": 1,
      //     "lte": 80}}}`
      //  ));


      //{"range":{"purchased_at":{"lt":"now","gte": "2016-10-13T00:00:00"}}}
        arr.push(JSON.parse(`{"range":{
                    "purchased_at": {
                      "gte": "2015-10-13T00:00:00",
                      "lt": "now"
          }}}`));

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
 
        //  case "number":
        //  case "datetime":
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
       str += this.getTotalAmountRangeAggregation();
       str += this.getPurchasedAtRangeAggregation();

       str = str.slice(0,-1);
       return JSON.parse(`{${str}}`);
       //let str =  filters.map(f=>`"by_${f}":{"terms":{"field":"${f}.keyword","size":20}}`);    
      
    }
    getPurchasedAtRangeAggregation()
    {
      return `"by_purchased_at": {
        "range": {
        "field": "purchased_at",
       
        "format": "MM-yyyy",
        "ranges": [
          { "to": "now-10M/M" },
          { "from": "now-10M/M" }
        ]
      }
    },`;
   }

  
getMultiSearchQuery(nonActicesIndices,term)
{
  let arr=[];
  
  nonActicesIndices.forEach(element => {
    
    const indexSettings =  Settings.general.find(x => x.name === element.name);  
    arr.push({ index: element.name });
    arr.push({query : {                       
                multi_match:{
                  fields:indexSettings.searchFields,
                  query:term,
                  lenient:true,
                  fuzziness:'AUTO',
                  operator:'or'
                }
            },size:0});
          });
  
  return arr;
}
     
getTotalAmountRangeAggregation()
{
      return `"by_total_amount": {
        "range": {
        "field": "total_amount",
        "ranges": [
          { "to": 100.0 },
          { "from": 100.0, "to": 200.0 },
          { "from": 200.0 }
        ]
      }
    },`;
}
    
logging(doc)  
  {     
    //logger.info("*** querry ***");
    //logger.info( doc.meta.request.params.body)

    console.log(chalk.white.bgRed.bold(doc.meta.request.params.body));
    
    logger.info("*** results ***");
    logger.info(doc.body);
  }   
}
module.exports = Helper;
