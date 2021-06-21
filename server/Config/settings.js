//oncontenxt remember :   selectedAggregation, current oage

module.exports = class Settings {
    
    constructor(){}
    
    //static indecis =this.db.indecis;
      
    
    static general =        
            [{ 
                    "name":"orders",
                    "title":"הזמנות",
                    "aggregation":["sales_channel", "salesman.name"  ,"status","_id","total_amount"],
                    "searchFields": ["sales_channel^5", "salesman.name"  ,"status","_id"],
                    "returnFields": ["sales_channel", "salesman.name"  ,"status","_id","amount","purchased_at","total_amount"],
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
                            },
                            {
                                "key":"total_amount",
                                "title" :"סכום",
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
                                    "key":"sales_channel",
                                    "title" : "ערוץ מכירה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":""
                                },
                                {
                                    "key":"salenames_channel",
                                    "title" : "שם",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":""
                                },
                                {
                                    "key":"permalink",
                                    "title" :"קישור",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"url"
                                },
                                {
                                    "key" :"twitter_username",
                                    "title" : "טוויטר",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":""
                                },
                                {
                                    "key":"email_address",
                                    "title" : "מייל",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":true,
                                    "pipe":""
                                },
                                {
                                    "key":"category_code",
                                    "title" : "מזהה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":""
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
                                        "key" : "tilte",
                                        "title" : "שם הספר",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "authors",
                                        "title" : "מחבר",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "categories",
                                        "title" :"קטגורייה",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":"url"
                                    },
                                    {
                                        "key" : "title",
                                        "title" : "תאור",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "isbn",
                                        "title" : "מק''ט",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "pageCount",
                                        "title" : "כמות דפים",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "shortDescription",
                                        "title" : "תאור ארוך",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "longDescription",
                                        "title" : "תאור ארוך",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "status",
                                        "title" : "מצב הוצאה",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
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
                                        "key" : "name",
                                        "title" : "שם מסעדה",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "outcode",
                                        "title" : "קוד עסקי",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "postcode",
                                        "title" :"מיקוד",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":"url"
                                    },
                                    {
                                        "key" : "rating",
                                        "title" : "דירוג",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "type_of_food",
                                        "title" : "סוג מזון",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "address",
                                        "title" : "כתובת",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":false,
                                        "pipe":""
                                    },
                                    {
                                        "key" : "address line 2",
                                        "title" : "כתובת לדואר",
                                        "linkByFiledValue":"_id",
                                        "linkUrl":"http:..google.com/?tv=",
                                        "cssClass":"bold",
                                        "isMultiline":true,
                                        "pipe":""
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
                                "key" : "status",
                                "title" : "מוצר",                                
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            {
                                "key" : "tags",
                                "title" : "תגיות",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },                            
                            {
                                "key" : "description",
                                "title" : "תאור",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":true,
                                
                            },
                            {
                                "title" :"_id",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
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
                                "key" : "name",
                                "title" : "תאור",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            {
                                "key" : "completed",
                                "title" : "האם בוצע",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                
                            },
                            {
                                "key" : "_id",
                                "title" :"מזהה",
                                "linkByFiledValue":"_id",
                                "linkUrl":"http:..google.com/?tv=",
                                "cssClass":"bold",
                                "isMultiline":false,
                                "pipe":"number"
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
                                    "key" : "name",
                                    "title" :"שם הכותר",
                                     "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },
                               
                                {
                                    "key" : "title",
                                    "title" : "תאור קצר",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                  
                                },
                                {
                                    "key":"id",
                                    "title" : "מזהה פנימי",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                
                                {
                                    "key" : "_id",
                                    "title" :"מזהה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                
                                {
                                    "key" : "location",
                                    "title" :"מיקום",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
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
                                    "key" : "name",
                                    "title" :"שם העובד",
                                     "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                   
                                },
                                
                                {
                                    "key" : "eyeColor",
                                    "title" : "עיניים",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                  
                                },                                                              
                                {
                                    "key" : "_id",
                                    "title" :"מזהה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                
                                {
                                    "key" : "age",
                                    "title" :"גיל",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                },                                
                                {
                                    "key" : "address",
                                    "title" :"כתובת",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                } ,                                
                                {
                                    "key" : "company",
                                    "title" :"חברה",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                }  ,
                                {
                                    "key" : "status",
                                    "title" :"מצב",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                    
                                }                                                                                                                               
                            ]
                    },
                    {
                        "name":"comments",
                        "title":"תגובות",
                        "searchFields": ["name^5", "email"  ,"body","_id"],
                        "returnFields": ["name^5", "email"  ,"body","_id"],
                        "aggregation":["name", "email"],
                        "ui":[                                                       
                                {
                                    "key" : "name",
                                    "title" :"שם",
                                     "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                   
                                },                                
                                {
                                    "key" : "email",
                                    "title" : "דואר אלקטרוני",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,                                  
                                },                                                              
                                {
                                    "key" : "body",
                                    "title" :"תוכן",
                                    "linkByFiledValue":"_id",
                                    "linkUrl":"http:..google.com/?tv=",
                                    "cssClass":"bold",
                                    "isMultiline":false,
                                    "pipe":"number"
                                },                                                              
                            
                            ]
                    }    
        ];

};

