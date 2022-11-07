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


app.post("/decimal", (req,res) => {
    
    let angka = Number(req.body.angka) 
    let biner=angka.toString(2)
    let oktal=angka.toString(8)
    let heksadesimal=angka.toString(16)
    
    let response = {
    bildesimal : angka,
    bilbiner : biner,
    biloktal: oktal,
    bilhexadesimal : heksadesimal

    }

    res.json(response)
    })

app.post("/biner", (req,res) => {
    
    let angka = Number(req.body.angka) 
    let desimal=parseInt(angka,2)
    let oktal=parseInt(angka,2).toString(8)
    let heksadesimal=parseInt(angka,2).toString(16)
    
    let response = {
    bilbiner : angka,
    bildesimal : desimal,
    biloktal: oktal,
    bilhexadesimal : heksadesimal

    }
    
    res.json(response)
    })

app.post("/oktal", (req,res) => {
    let angka = Number(req.body.angka)
    let desimal = parseInt(angka,8)
    let biner = parseInt(angka,8).toString(2)
    let hexadesimal = parseInt(angka,8).toString(16)

    let response = {
        biloktal : angka,
        bildesimal : desimal,
        bilbiner : biner,
        bilhexadesimal : hexadesimal

    }

    res.json(response)
})

app.post("/hexadesimal", (req,res) => {
    let angka = Number(req.body.angka)
    let desimal = parseInt(angka,16)
    let biner = parseInt(angka,16).toString(2)
    let oktal = parseInt(angka,16).toString(8)

    let response = {
        bilhexadesimal : angka,
        bildesimal : desimal,
        bilbiner : biner,
        biloktal : oktal
       
    }

    res.json(response)
})

app.listen(8090, () => {
    console.log("Server run on port 8090");
  });