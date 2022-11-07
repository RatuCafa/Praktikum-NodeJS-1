const express = require("express"); // memanggil library express js
const bodyParser = require("body-parser"); // memanggil library bodyparser
const cors = require("cors"); // memanggil library cors
const { urlencoded } = require("body-parser");
const app = express();

app.use(bodyParser.json());
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }));
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors());


app.post("/bmi", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    
    let berat = Number(req.body.berat) // mengambil nilai panjang da ri body
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang da ri body
    let bmi = berat / (tinggi * tinggi)
    let status = ''
    
    // membuat objek yang berisi data yang akan dijadikan response 
    if(bmi < 18.5) {
        status = "kekurangan berat badan"
    }
    else if(bmi >= 18.5 && bmi < 25) {
        status = 'Normal'
    }
    else if(bmi >= 25 && bmi < 30) {
        status = 'berat badan berlebih'
    }
    else if(bmi >= 30) {
        status = "kegemukan (Obesitas)"
    }

    let response = {
    Berat: berat,   
    tinggi: tinggi,
    bmi: bmi.toFixed(1),
    status: status
    }

    //console.log(response.berat)
    
    // memberikan response dengan format JSON yang berisi objek di atas 
    res.json(response)
    })

    app.listen(8090, () => {
        console.log("Server run on port 8090");
      });