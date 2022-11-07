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

app.post("/ganjilGenab", (req,res) => {

    let angka = Number(req.body.angka) // mengambil nilai panjang dari body
    let hitung = angka % 2

    let hasil = ''

    if(hitung == 0) {
        hasil = "Bilangan genap"
    }
    else if(hitung == 1) {
        hasil = 'Bilangan ganjil'
    }
    // membuat objek yang berisi data yang akan dijadikan response 
    let response = {
    inputAngka: angka, 
    hasil: hasil,    
    }
    
    // memberikan response dengan format JSON yang berisi objek di atas 
    res.json(response)
    })

    app.listen(8090, () => {
        console.log("Server run on port 8090");
      });