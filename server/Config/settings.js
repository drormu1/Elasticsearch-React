//oncontenxt remember :   selectedAggregation, current oage

module.exports = class Settings {
    
    constructor(){}
    
    //static indecis =this.db.indecis;
      
    
    static general =        
            [{ 
                    "name":"orders",
                    "title":"הזמנות",
                    "aggregation":["sales_channel", "salesman.name"  ,"status","_id"],
                    "searchFields": ["sales_channel^5", "salesman.name"  ,"status","_id"],
                    "returnFields": ["sales_channel", "salesman.name"  ,"status","_id","amount","purchased_at"],
                    "ui":[
                            
                            {
                                "key" : "sales_channel",
                                "title" : "ערוץ מכירה",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
                            },
                            {
                                "key":"salesman.name",
                                "title" : "שם המוכר",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
                            },
                            {
                                "key":"_id",
                                "title" :"מזהה",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
                            }  ,
                            {
                                "key":"status",
                                "title" :"מצב הזמנה",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
                            }                             
                        ]
                    },
                    {
                        "name":"companies",
                        "title":"חברות",
                        "aggregation":["category_code"],
                        "searchFields": ["permalink^5", "name"  ,"twitter_username","tag_list","email_address","overview","category_code"],
                        "returnFields": ["permalink", "name"  ,"twitter_username","tag_list","email_address","overview","category_code"],
                        "ui":[
                                {
                                "sales_channel":{
                                    "title" : "ערוץ מכירה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":""
                                },
                                "name":{
                                    "title" : "שם",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":""
                                },
                                "permalink":{
                                    "title" :"קישור",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"url"
                                },
                                "twitter_username":{
                                    "title" : "טוויטר",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":""
                                },
                                "email_address":{
                                    "title" : "מייל",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":true,
                                    "pipe":""
                                },
                                "category_code":{
                                    "title" : "מזהה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":""
                                }
                                }
                            ]
                        },
                        {
                            "name":"books",
                            "title":"ספרים",
                            "aggregation":["status","authors","categories"],
                            "searchFields": ["title^5", "isbn"  ,"pageCount","shortDescription","longDescription","status","authors"],
                            "returnFields": ["publishedDate", "thumbnailUrl"  ,"shortDescription","longDescription","status","authors","categories"],
                            "ui":[
                                    {
                                    "status":{
                                        "title" : "שם הספר",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    "authors":{
                                        "title" : "מחבר",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    "categories":{
                                        "title" :"קטגורייה",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":"url"
                                    },
                                    "title":{
                                        "title" : "תאור",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    "isbn":{
                                        "title" : "ISBN",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
                                    },
                                    "pageCount":{
                                        "title" : "כמות דפים",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    "shortDescription":{
                                        "title" : "תאור ארוך",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
                                    },
                                    "longDescription":{
                                        "title" : "תאור ארוך",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
                                    }
                                    }
                                ]
                        },
                        {
                            "name":"restaurant",
                            "title":"מסעדות",
                            
                            "aggregation":["outcode","postcode","rating", "type_of_food"],
                            "searchFields": ["address","address line 2","name^5","outcode","postcode","rating", "type_of_food"],
                            "returnFields": ["address","address line 2","name","outcode","postcode","rating", "type_of_food"],
                            "ui":[
                                    {
                                    "status":{
                                        "title" : "שם מסעדה",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    "outcode":{
                                        "title" : "קוד עסקי",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    "postcode":{
                                        "title" :"מיקוד",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":"url"
                                    },
                                    "rating":{
                                        "title" : "דירוג",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    "type_of_food":{
                                        "title" : "סוג מזון",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
                                    },
                                    "address":{
                                        "title" : "כתובת",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    "address line 2":{
                                        "title" : "כתובת לדואר",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
                                    }
                                    }
                                ]
                        },

                    
                    {
                        "name":"products",
                        "title":"מוצרים",
                        "searchFields": ["name^5", "description"  ,"tags","_id"],
                        "aggregation":["name", "tags"],
                    
                        "returnFields": ["name", "description"  ,"tags","_id",],
                    "ui":[
                            {
                            "name":{
                                "title" : "מוצר",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            "tags":{
                                "title" : "תגיות",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            "description":{
                                "title" : "תאור",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":true,
                                
                            },
                            "_id":{
                                "title" :"מזהה",
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
                        "title":"משימות",
                        "searchFields": ["title","_id"],
                        "aggregation":["completed"],                    
                        "returnFields": ["title", "completed","_id"],
                    "ui":[
                            {
                            "name":{
                                "title" : "תאור",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            "completed":{
                                "title" : "האם בוצע",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            "_id":{
                                "title" :"מזהה",
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
                        "title":"יו טיוב",
                        "searchFields": ["title^5", "description"  ,"location","name","id","_id"],
                        "aggregation":["title" ,"name"],
                        "searchFields": ["title", "description"  ,"location","name","id","_id"],
                        "returnFields": ["title", "description"  ,"location","name","id","_id"],
                        "ui":[                                                        
                            {
                            "name" : {
                                    "title" :"שם הכותר",
                                     "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },
                               
                                "title":{
                                    "title" : "תאור קצר",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                  
                                },
                                "id":{
                                    "title" : "מזהה פנימי",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                
                                "_id":{
                                    "title" :"מזהה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                
                                "location":{
                                    "title" :"מיקום",
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
                        "title":"עובדים",
                        "aggregation":["eyeColor", "company"],
                        "searchFields": ["name^5", "eyeColor"  ,"age","tags","address","company","_id"],                       
                        "returnFields": ["name", "eyeColor"  ,"age","tags","address","company","_id"],
                        "ui":[  
                            {                                                      
                                "name":{
                                    "title" :"שם העובד",
                                     "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                   
                                },
                                
                                "eyeColor":{
                                    "title" : "עיניים",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                  
                                },                                                              
                                "_id":{
                                    "title" :"מזהה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                
                                "age":{
                                    "title" :"גיל",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                },                                
                                "address":{
                                    "title" :"כתובת",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                } ,                                
                                "company":{
                                    "title" :"חברה",
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
                        "title":"תגובות",
                        "searchFields": ["name^5", "email"  ,"body","_id"],
                    }    
        ];

};

