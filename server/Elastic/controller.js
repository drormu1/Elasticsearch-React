const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const chalk = require('chalk');
const { Client } = require('@elastic/elasticsearch');
const logger = require('../Helpers/logger');
const SearchRequest = require('../Models/searchRequest');
const Settings = require("../Config/settings");
const Helper = require("./helper");


class Controller {

     helper= new Helper();          
     client = new Client({
        node: Settings.elasticUrl
      });
      
    
     test = () => {
        return 'Jim';
    };

    async indices() {
      const doc=  await this.client.cat.indices({v: true});               
      logger.info(doc.body);
      
    };

    async searchNonActives(req){
     
      const activeIndex = req.body.activeIndex || 'orders';
      const nonActives =  Settings.general.filter(x => x.name != activeIndex);
      const term =  req.body.term || 'Wine';    
      let results=[];        

      const  res = await this.client.msearch({
      body: this.helper.getMultiSearchQuery(nonActives,term)
      }) 
      .then(data=> { 
        console.log("success ");
        return data;
      })
      .catch(err => {
        console.log(chalk.white.bgRed.bold(err));           
        logger.info(err);
         });
     
      console.log(chalk.white.bgGreen.bold(res.meta.request.params.body));  
      nonActives.forEach((element,index) => {       
        results.push({name:element.name,count:res.body.responses[index].hits.total.value | 0});
          console.log(results);
      });      
      return results;     
    }

    async searchAsync(req) {
      try {  
      
      const activeIndex = req.body.activeIndex || 'orders';
      const indexSettings =  Settings.general.find(x => x.name === activeIndex);
     
      const  searchRequest  = new SearchRequest();
      searchRequest.activeIndex= activeIndex;  
      searchRequest.term="gert Cla Gra ";
      searchRequest.page=0;
      searchRequest.size=500;
      searchRequest.andCondition = 'or';
      searchRequest.sortDirection='desc';
      searchRequest.sort='_id';

      searchRequest.filters=[{"key":"status","values":["processed","completed","cancelled"]},
                             {"key":"sales_channel","values":["store","web","phone"]}];

      searchRequest.filterSpecialAsStr = '';

      const doc = await this.client.search({
        index:searchRequest.activeIndex,
        _source: false,
       
        sort: [searchRequest.sort + ':' +searchRequest.sortDirection],
         body: {      
          fields: indexSettings.returnFields, //return fields  
          size: searchRequest.size,
          sort:this.helper.getSorting(searchRequest),
          from: searchRequest.from,
          highlight : {
            pre_tags : ["<span class='highlighter'>"],
            post_tags : ["</span>"],
            fields : {
              "*" :  {"fragment_size" : 150, "number_of_fragments" : 3}
            }
           }, 
          aggs: this.helper.getAggsStr(indexSettings.aggregation),
          query : {
            bool:{
              must:this.helper.getQuery(searchRequest,indexSettings.searchFields)}}
         
       }});

       this.helper.logging(doc);      
       return  doc.body.hits.hits;         
      } 
      catch(err) {
        
       logger.error(err.message);
      //console.log(err);
        return err;
      }
     };      
  
   async autocompleteAsync(req) {
    try {            
    const indexSettings =  Settings.general.find(x => x.name === 'orders');   
    const term = req.body.term || 'GAR';

    const doc = await this.client.search({
      index: Settings.general.map(a => a.name).join(','),
      _source: false,       
      size: 10,
      body: {   
      fields: ["autocomplete"],
      
      query : {
          multi_match: {         
            query: term,                      
            type: "bool_prefix",
            fields: [
              "autocomplete",
              "autocomplete._2gram",
              "autocomplete._3gram"
            ]
       }}      
     }});
     
     this.helper.logging(doc);             
     return  doc.body.hits.hits.map(h=>h).map(m=>m.fields).map(a=>a.autocomplete).sort();         
    } 
    catch(err) {        
     logger.error(err.message);
    //console.log(err);
      return err;
    }
   }; 

    old =  (req,res) =>{ 
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

   insertSingles(index,rows){
     let count=0;
     rows.forEach( r => {
      this.client.index({
        index: index,               
        body: r
    })
    .then(data=> { console.log(count++);});
  });
  
    return rows.length + ' inserted - ok';
   }

}
module.exports =Controller;