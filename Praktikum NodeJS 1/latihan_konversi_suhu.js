const express = require("express"); // memanggil library express js
const bodyParser = require("body-parser"); // memanggil library bodyparser
const cors = require("cors"); // memanggil library cors
const app = express();

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json());
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }));
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors());

 
  app.get("/convert/celcius/:value", (req, res) => {
    let value = Number(req.params.value); 
    let reamur = (4/5) * value;
    let kelvin = value + 273;
    let fahrenheit = (9/5) * value + 32;
    let response = {
      Celcius : value,
      Reamur: reamur,
      Kelvin: kelvin,
      Fahrenheit: fahrenheit
    };

  res.json(response);
});

app.get("/convert/reamur/:value", (req, res) => {
  let value = Number(req.params.value); 
  let celcius = (5/4) * value;
  let kelvin = celcius + 273;
  let fahrenheit = (9/4) * value + 32;
  let response = {
    Reamur : value,
    result:{
    Celcius: celcius,
    Kelvin: kelvin,
    Fahrenheit: fahrenheit
  }
  };

res.json(response);
});

app.get("/convert/kelvin/:value", (req, res) => {
  let value = Number(req.params.value); 
  let celcius = value - 273;
  let reamur = 4/5 * (value-273);
  let fahrenheit = ((value - 273.15)*1.8)+32;
  let response = {
    Kelvin : value,
    Celcius: celcius,
    Fahrenheit: fahrenheit.toFixed(2),
    Reamur: reamur
    
  };

res.json(response);
});

app.get("/convert/fahrenheit/:value", (req, res) => {
  let value = Number(req.params.value); 
  let celcius = (value - 32) / 1.8;
  let reamur = 4/9 * (value - 32);
  let kelvin = ((value - 32)/1.8)+273;
  let response = {
    Fahrenheit : value,
    Celcius: celcius,
    reamur: reamur,
    Kelvin: kelvin
  };

res.json(response);
});



app.listen(8090, () => {
  console.log("Server run on port 8090");
});
