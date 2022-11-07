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

app.post("/kubus", (req,res) => {
    let sisi = Number(req.body.sisi);
    let volume = sisi * sisi * sisi;
    let LuasP = 6 * (sisi * sisi);

    let response = {
        Sisi: sisi,
        Volume: volume,
        LuasPermukaan: LuasP
    };

    res.json(response);
});

app.post("/balok", (req,res) => {
    let panjang = Number(req.body.panjang);
    let lebar = Number(req.body.lebar);
    let tinggi = Number(req.body.tinggi);
    let volume = panjang * lebar * tinggi;
    let LuasP = (2 * panjang * lebar) + (2 * lebar * tinggi) + (2 * panjang * tinggi);

    let response = {
        Panjang: panjang,
        Lebar : lebar,
        Tinggi: tinggi,
        Volume: volume,
        LuasPermukaan: LuasP
    };

    res.json(response);
});

app.post("/bola", (req,res) => {
    let r = Number(req.body.r);
    let volume = 4/3 * 3.14 * (r * r * r);
    let LuasP = 4 * 3.14 * (r * r);

    let response = {
        R: r, 
        Volume: volume,
        LuasPermukaan: LuasP
    };

    res.json(response);
});

app.post("/tabung", (req,res) => {
    let r = Number(req.body.r);
    let tinggi = Number(req.body.tinggi);
    let volume = 3.14 * (r * r) * tinggi;
    let LuasP = 2 * 3.14 * r * (r + tinggi);

    let response = {
        R: r, 
        Tinggi: tinggi,
        Volume: volume,
        LuasPermukaan: LuasP
    };

    res.json(response);
});


app.listen(8090, () => {
    console.log("Server run on port 8090");
  });