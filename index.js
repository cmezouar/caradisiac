const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
const async = require('async');


async function get_Brands () {
    const brands = await getBrands();
    //console.log(brands);
    return brands;   
};


async function get_Models (brand) {
    const models = await getModels(brand);
    //console.log(models);
    return models;
};


//var car_Brands = get_Brands();

async function buildResult (){
    var prevJson ={
        "brand_name": " ",
        "models":[{

        }]
    };
    get_Brands().then(function(brands){
        async.each(brands,function(brand){
            //console.log(brand);
            prevJson.brand_name=brand;
            console.log(prevJson);
            get_Models(brand).then(function(models){
                async.each(models, function(model){
                if(prevJson.brand_name==model.brand){
                    prevJson.models.push(model);
                }
                }); 
                //console.log(prevJson);           
            });

        });
        return prevJson;
    });
    
    
};


buildResult();


//var toyota = get_Models('TOYOTA');

//console.log(typeof toyota);

//console.log(typeof car_Brands);




