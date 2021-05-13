//oncontenxt remember :   selectedAggregation, current oage
module.exports = class Settings {
    
    constructor(){}
    
    //static indecis =this.db.indecis;
      
    static general =        
            [{
                    "name":"orders",
                    "aggregation":["sales_channel", "salesman.name"  ,"status","_id","amount"],
                    "searchFields": ["sales_channel^5", "salesman.name"  ,"status","_id","amount"],
                    "returnFields": ["sales_channel", "salesman.name"  ,"status","_id","amount"],
                    "ui":[
                            {
                            "sales_channel":{
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
                            },
                            "salesman.name":{
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
                            },
                            "_id":{
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
                            }
                            }
                            ]
                    },
                    {
                    "name":"orders2",
                    "aggregation":["sales_channel", "salesman.name"  ,"status","_id","amount"],
                    "searchFields": ["sales_channel^5", "salesman.name"  ,"status","_id","amount"],
                    "returnFields": ["sales_channel", "salesman.name"  ,"status","_id","amount"]
                    }            
        ];

};

