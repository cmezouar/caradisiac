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
    var prevJson = [];
    get_Brands().then(function(brands){
        async.each(brands,function(brand){
            //console.log(brand);
            get_Models(brand).then(function(models){
                async.each(models, function(model){
                    prevJson.push(model);
                    //console.log(model);
                })            
            })

        })
    })
    return prevJson;
    console.log(prevJson);
    
};


buildResult();


//var toyota = get_Models('TOYOTA');

//console.log(typeof toyota);

//console.log(typeof car_Brands);




