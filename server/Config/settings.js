//oncontenxt remember :   selectedAggregation, current oage
module.exports = class Settings {
    
    constructor(){}
    
    //static indecis =this.db.indecis;
      
    static elasticUrl = "http://localhost:9200";
    static general =        
            [{
                    "name":"orders",
                    "aggregation":["sales_channel", "salesman.name"  ,"status","_id"],

                    "searchFields": ["sales_channel^5", "salesman.name"  ,"status","_id"],
                    "returnFields": ["sales_channel", "salesman.name"  ,"status","_id","amount","purchased_at"],
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
                        "name":"products",
                        "searchFields": ["name^5", "description"  ,"tags","_id"],
                    },  
                    {
                        "name":"todos",
                        "searchFields": ["title^5", "title","_id"],
                    },
                    {
                        "name":"youtubes",
                        "searchFields": ["title^5", "description"  ,"location","name","id","_id"],
                    },
                    {
                        "name":"employees",
                        "searchFields": ["name^5", "eyeColor"  ,"age","tags","address","company","_id"],
                    },
                    {
                        "name":"comments",
                        "searchFields": ["name^5", "email"  ,"body","_id"],
                    }    
        ];

};

