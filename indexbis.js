const {getBrands} = require('node-car-api');
const {getModels} = require('node-car-api');
const async = require('async');

var carJson = {
    "brand_name" : " ",
    "models":[{}]
}

async function get_Brands () {
    const brands = await getBrands();
    console.log(brands);
    return brands;   
};


async function get_Models (brand) {
    const models = await getModels(brand);
    console.log(models);
    return models;
};

//get_Brands();
get_Models('VOLVO');

async function build_Result(){
    get_Brands().then(function(brands){
        async.each(brands,function(brand){
            carJson.brand_name = brand;
            get_Models(brand).then(function(carJson))
        });
    
    }
    
};

//build_Result();