const express   = require("express");


const app = express();

const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',

  // Optional depending on the providers
//   fetch: customFetchImplementation,
  apiKey:'', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);


// Using callback
 geocoder.geocode('India Gate,Rajpath, India Gate, New Delhi, Delhi 110001',(err,data)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
    }
 });
app.listen(3000,()=>console.log(`server run at port 3000`));