//oncontenxt remember :   selectedAggregation, current oage

module.exports = class Settings {
    
    constructor(){}
    
    //static indecis =this.db.indecis;
      
    
    static general =        
            [{
                    "name":"orders",
                    "aggregation":["sales_channel", "salesman.name"  ,"status","_id"],
                    "searchFields": ["sales_channel^5", "salesman.name"  ,"status","_id"],
                    "returnFields": ["sales_channel", "salesman.name"  ,"status","_id","amount","purchased_at"],
                    "ui":[
                            {
                            "sales_channel":{
                                "name" : "ערוץ מכירה",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
                            },
                            "salesman.name":{
                                "name" : "שם המוכר",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
                            },
                            "_id":{
                                "name" :"מזהה",
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
                        "aggregation":["name", "tags"],
                    
                        "returnFields": ["name", "description"  ,"tags","_id",],
                    "ui":[
                            {
                            "name":{
                                "name" : "מוצר",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            "tags":{
                                "name" : "תגיות",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            "description":{
                                "name" : "תאור",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":true,
                                
                            },
                            "_id":{
                                "name" :"מזהה",
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
                        "name":"todos",
                        "searchFields": ["title","_id"],
                        "aggregation":["completed"],                    
                        "returnFields": ["title", "completed","_id"],
                    "ui":[
                            {
                            "name":{
                                "name" : "תאור",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            "completed":{
                                "name" : "האם בוצע",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            "_id":{
                                "name" :"מזהה",
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
                        "name":"youtubes",
                        "searchFields": ["title^5", "description"  ,"location","name","id","_id"],
                        "aggregation":["title" ,"name"],
                        "searchFields": ["title", "description"  ,"location","name","id","_id"],
                        "returnFields": ["title", "description"  ,"location","name","id","_id"],
                        "ui":[                                                        
                            {
                            "name" : {
                                    "name" :"שם הכותר",
                                     "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },
                               
                                "title":{
                                    "name" : "תאור קצר",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                  
                                },
                                "id":{
                                    "name" : "מזהה פנימי",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                
                                "_id":{
                                    "name" :"מזהה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                
                                "location":{
                                    "name" :"מיקום",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                }                                
                               
                                }
                            
                            ]
                    },
                    {
                        "name":"employees",
                        "aggregation":["eyeColor", "company"],
                        "searchFields": ["name^5", "eyeColor"  ,"age","tags","address","company","_id"],                       
                        "returnFields": ["name", "eyeColor"  ,"age","tags","address","company","_id"],
                        "ui":[  
                            {                                                      
                                "name":{
                                    "name" :"שם העובד",
                                     "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                   
                                },
                                
                                "eyeColor":{
                                    "name" : "עיניים",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                  
                                },                                                              
                                "_id":{
                                    "name" :"מזהה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                
                                "age":{
                                    "name" :"גיל",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                },                                
                                "address":{
                                    "name" :"כתובת",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                } ,                                
                                "company":{
                                    "name" :"חברה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                }                                                                
                                }
                            
                            ]
                    },
                    {
                        "name":"comments",
                        "searchFields": ["name^5", "email"  ,"body","_id"],
                    }    
        ];

};

