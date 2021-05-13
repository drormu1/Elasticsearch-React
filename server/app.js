const express = require("express");
const bodyParser = require("body-parser");
const assert = require('assert');
const cors = require('cors');
const elasticHelper = require("./Elastic/elasticHelper");



const app = express();
const elsHelper = new elasticHelper()

app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json()); 

app.get('/', (req, res) => {
   const results = elsHelper.search();   
    res.status(200).send(elsHelper.test());
  });
 

app.get("/searchold",function(req,res){ 
  
    // console.log('get search')      ;  
    // let results = elsHelper.search().then(function(res1){console.log(res1.length);return res1;});
    // console.log(results);
    // res.header('Content-Type', 'application/json');
    // res.status(200).send(JSON.stringify(results));  
   elsHelper.searchold(req,res);
   
});  

app.get('/search', (req, res, next) => {  

    res.header('Content-Type', 'application/json');
    elsHelper.searchAsync(req)
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
  app.get('/autocomplete', (req, res, next) => {  

    res.header('Content-Type', 'application/json');
    elsHelper.autocompleteAsync(req)
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
    elsHelper.indices()
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
 
  

//add new product
app.post("/product",function(request,response){    
  
  let last = dbHelp.Product.find({}).sort ({id:-1}).limit(1);
  //find last id
  last.findOne(function(err, result) {
    if (err) {
      console.log(err);
       throw err;}    
    newId = parseInt(result.id )+1;
    console.log('new id is ' + newId);

    item = {
    id: newId,
    categoryId: request.body.categoryId,
    name : request.body.name,
    description : request.body.description 
    };

    //insert the new item
    dbHelp.Product.create(item, function(err, res) {
      if (err) {
        console.log(err);
         throw err;}  
      console.log("new document inserted"); 
      response.status(200).send('ok');     
    });
    
    
  });

  
  
//let c = dbHelp.Product.find({}).sort({'_id':-1}).limit(1);
 
//console.log('cccc' + c.name);
});

//http://localhost:3000/products?categoryId=1
app.get("/products",function(req,res){  
    let  categoryId = req.query.categoryId;
    console.log('get products categoryId::' +categoryId);
    dbHelp.Product.find({categoryId: Number(categoryId)},function(err,results){    
        //console.log(results) ;        
        res.status(200).send(results);
    }); 
}); 

app.get("/insert",function(req,res){  
    
  products = [{
    name: 'Brown eggs',
    categoryId: 3,
    description: 'Raw organic brown eggs in a basket',
    id: 0,
    height: 600,
    width: 400,
    price: 28.1,
    rating: 4
  }, {
    name: 'Sweet fresh stawberry',
    categoryId: 1,
    description: 'Sweet fresh stawberry on the wooden table',
    id: 1,
    height: 450,
    width: 299,
    price: 29.45,
    rating: 4
  }, {
    name: 'Asparagus',
    categoryId: 2,
    description: 'Asparagus with ham on the wooden table',
    id: 2,
    height: 450,
    width: 299,
    price: 18.95,
    rating: 3
  }, {
    name: 'Green smoothie',
    categoryId: 3,
    description: 'Glass of green smoothie with quail egg\'s yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.',
    id: 3,
    height: 600,
    width: 399,
    price: 17.68,
    rating: 4
  }, {
    name: 'Raw legums',
    categoryId: 2,
    description: 'Raw legums on the wooden table',
    id: 4,
    height: 450,
    width: 299,
    price: 17.11,
    rating: 2
  }, {
    name: 'Baking cake',
    categoryId: 3,
    description: 'Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.',
    id: 5,
    height: 450,
    width: 675,
    price: 11.14,
    rating: 4
  }, {
    name: 'Pesto with basil',
    categoryId: 2,
    description: 'Italian traditional pesto with basil, chesse and oil',
    id: 6,
    height: 450,
    width: 299,
    price: 18.19,
    rating: 2
  }, {
    name: 'Hazelnut in black ceramic bowl',
    categoryId: 2,
    description: 'Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus',
    id: 7,
    height: 450,
    width: 301,
    price: 27.35,
    rating: 0
  }, {
    name: 'Fresh stawberry',
    categoryId: 1,
    description: 'Sweet fresh stawberry on the wooden table',
    id: 8,
    height: 600,
    width: 399,
    price: 28.59,
    rating: 4
  }, {
    name: 'Lemon and salt',
    categoryId: 1,
    description: 'Rosemary, lemon and salt on the table',
    id: 9,
    height: 450,
    width: 299,
    price: 15.79,
    rating: 5
  }, {
    name: 'Homemade bread',
    categoryId: 4,
    description: 'Homemade bread',
    id: 10,
    height: 450,
    width: 301,
    price: 17.48,
    rating: 3
  }, {
    name: 'Legums',
    categoryId: 2,
    description: 'Cooked legums on the wooden table',
    id: 11,
    height: 600,
    width: 399,
    price: 14.77,
    rating: 0
  }, {
    name: 'Fresh tomato',
    categoryId: 2,
    description: 'Fresh tomato juice with basil',
    id: 12,
    height: 600,
    width: 903,
    price: 16.3,
    rating: 2
  }, {
    name: 'Healthy breakfast',
    categoryId: 1,
    description: 'Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background',
    id: 13,
    height: 450,
    width: 350,
    price: 13.02,
    rating: 2
  }, {
    name: 'Green beans',
    categoryId: 2,
    description: 'Raw organic green beans ready to eat',
    id: 14,
    height: 450,
    width: 300,
    price: 28.79,
    rating: 1
  }, {
    name: 'Baked stuffed portabello mushrooms',
    categoryId: 4,
    description: 'Homemade baked stuffed portabello mushrooms with spinach and cheese',
    id: 15,
    height: 600,
    width: 400,
    price: 20.31,
    rating: 1
  }, {
    name: 'Strawberry jelly',
    categoryId: 1,
    description: 'Homemade organic strawberry jelly in a jar',
    id: 16,
    height: 400,
    width: 600,
    price: 14.18,
    rating: 1
  }, {
    name: 'Pears juice',
    categoryId: 1,
    description: 'Fresh pears juice on the wooden table',
    id: 17,
    height: 600,
    width: 398,
    price: 19.49,
    rating: 4
  }, {
    name: 'Fresh pears',
    categoryId: 1,
    description: 'Sweet fresh pears on the wooden table',
    id: 18,
    height: 600,
    width: 398,
    price: 15.12,
    rating: 5
  }, {
    name: 'Caprese salad',
    categoryId: 2,
    description: 'Homemade healthy caprese salad with tomato mozzarella and basil',
    id: 19,
    height: 400,
    width: 600,
    price: 16.76,
    rating: 5
  }, {
    name: 'Oranges',
    categoryId: 1,
    description: 'Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.',
    id: 20,
    height: 450,
    width: 274,
    price: 21.48,
    rating: 4
  }, {
    name: 'Vegan food',
    categoryId: 2,
    description: 'Concept of vegan food',
    id: 21,
    height: 450,
    width: 299,
    price: 29.66,
    rating: 4
  }, {
    name: 'Breakfast with muesli',
    categoryId: 3,
    description: 'Concept of healthy breakfast with muesli',
    id: 22,
    height: 450,
    width: 299,
    price: 22.7,
    rating: 2
  }, {
    name: 'Honey',
    categoryId: 4,
    description: 'Honey and honeycell on the table',
    id: 23,
    height: 450,
    width: 299,
    price: 17.01,
    rating: 2
  }, {
    name: 'Breakfast with cottage',
    categoryId: 1,
    description: 'Healthy breakfast with cottage cheese and strawberry',
    id: 24,
    height: 600,
    width: 398,
    price: 14.05,
    rating: 1
  }, {
    name: 'Strawberry smoothie',
    categoryId: 1,
    description: 'Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background',
    id: 25,
    height: 600,
    width: 400,
    price: 28.86,
    rating: 2
  }, {
    name: 'Strawberry and mint',
    categoryId: 1,
    description: 'Homemade muesli with strawberry and mint',
    id: 26,
    height: 450,
    width: 299,
    price: 26.21,
    rating: 4
  }, {
    name: 'Ricotta',
    categoryId: 3,
    description: 'Ricotta with berry and mint',
    id: 27,
    height: 600,
    width: 398,
    price: 27.81,
    rating: 5
  }, {
    name: 'Cuban sandwiche',
    categoryId: 4,
    description: 'Homemade traditional cuban sandwiches with ham pork and cheese',
    id: 28,
    height: 450,
    width: 300,
    price: 18.5,
    rating: 4
  }, {
    name: 'Granola',
    categoryId: 3,
    description: 'Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light',
    id: 29,
    height: 450,
    width: 300,
    price: 29.97,
    rating: 3
  }, {
    name: 'Smoothie with chia seeds',
    categoryId: 1,
    description: 'Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table',
    id: 30,
    height: 600,
    width: 900,
    price: 25.26,
    rating: 5
  }, {
    name: 'Yogurt',
    categoryId: 3,
    description: 'Homemade yogurt with raspberry and mint',
    id: 31,
    height: 450,
    width: 299,
    price: 27.61,
    rating: 4
  }, {
    name: 'Sandwich with salad',
    categoryId: 2,
    description: 'Vegan sandwich with salad, tomato and radish',
    id: 32,
    height: 600,
    width: 398,
    price: 22.48,
    rating: 5
  }, {
    name: 'Cherry',
    categoryId: 1,
    description: 'Cherry with sugar on old table',
    id: 33,
    height: 600,
    width: 400,
    price: 14.35,
    rating: 5
  }, {
    name: 'Raw asparagus',
    categoryId: 2,
    description: 'Raw fresh asparagus salad with cheese and dressing',
    id: 34,
    height: 600,
    width: 400,
    price: 22.97,
    rating: 4
  }, {
    name: 'Corn',
    categoryId: 2,
    description: 'Grilled corn on the cob with salt and butter',
    id: 35,
    height: 450,
    width: 300,
    price: 13.55,
    rating: 2
  }, {
    name: 'Vegan',
    categoryId: 'vegan',
    description: 'Concept of healthy vegan eating',
    id: 36,
    height: 600,
    width: 398,
    price: 28.96,
    rating: 5
  }, {
    name: 'Fresh blueberries',
    categoryId: 1,
    description: 'Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view',
    id: 37,
    height: 450,
    width: 321,
    price: 21.01,
    rating: 4
  }, {
    name: 'Smashed avocado',
    categoryId: 1,
    description: 'Vegan sandwiches with smashed avocado, tomatoes and radish. top view',
    id: 38,
    height: 450,
    width: 450,
    price: 25.88,
    rating: 0
  }, {
    name: 'Italian ciabatta',
    categoryId: 4,
    description: 'Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view',
    id: 39,
    height: 450,
    width: 565,
    price: 15.18,
    rating: 1
  }, {
    name: 'Rustic breakfast',
    categoryId: 3,
    description: 'Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space',
    id: 40,
    height: 450,
    width: 307,
    price: 21.32,
    rating: 0
  }, {
    name: 'Sliced lemons',
    categoryId: 1,
    description: 'Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.',
    id: 41,
    height: 600,
    width: 900,
    price: 27.14,
    rating: 2
  }, {
    name: 'Plums',
    categoryId: 1,
    description: 'Yellow and red sweet plums',
    id: 42,
    height: 450,
    width: 299,
    price: 19.18,
    rating: 1
  }, {
    name: 'French fries',
    categoryId: 4,
    description: 'Homemade oven baked french fries with ketchup',
    id: 43,
    height: 600,
    width: 400,
    price: 18.32,
    rating: 3
  }, {
    name: 'Strawberries',
    categoryId: 1,
    description: 'Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000',
    id: 44,
    height: 450,
    width: 352,
    price: 15.13,
    rating: 3
  }, {
    name: 'Ground beef meat burger',
    categoryId: 'meat',
    description: 'Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background',
    id: 45,
    height: 450,
    width: 675,
    price: 11.73,
    rating: 5
  }, {
    name: 'Tomatoes',
    categoryId: 1,
    description: 'Organic tomatoes made with love',
    id: 46,
    height: 450,
    width: 675,
    price: 26.03,
    rating: 4
  }, {
    name: 'Basil',
    categoryId: 2,
    description: 'Concept of vegan food with basil',
    id: 47,
    height: 450,
    width: 678,
    price: 15.19,
    rating: 4
  }, {
    name: 'Fruits bouquet',
    categoryId: 1,
    description: 'Abstract citrus fruits bouquet on blue background',
    id: 48,
    height: 600,
    width: 401,
    price: 18.18,
    rating: 1
  }, {
    name: 'Peaches on branch',
    categoryId: 1,
    description: 'Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.',
    id: 49,
    height: 600,
    width: 400,
    price: 25.62,
    rating: 3
 
  }];
  console.log(this.products.length) ;  

    try{
         dbHelp.Product.insertMany(this.products,function(err,results){        
        console.log(results) ;        
        res.status(200).send(results);
    });
    }
    catch(e)
    {
      
        console.error( "errorrrr" + e);
    }
}); 


 

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:${3000}`);
  });
 
