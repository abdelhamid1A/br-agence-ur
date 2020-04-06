var express = require('express');
var router = express.Router();
const fs = require('fs');

const data = fs.readFileSync('que.json');
let json = JSON.parse(data);

/* GET home page. */
router.get('/question', function(req, res, next) {
  res.render('questions',{json});
});


router.post('/question',(req, res)=>{
  var bq = req.body;
  json.push(bq);
  const data =JSON.stringify(json);
  fs.writeFileSync('que.json', data, 'utf-8');
  res.redirect('/question');
})

//start hakam


const   bodyParser  = require('body-parser')
var     pathFile    = 'public/data/data.json';
var     pathFile2    = 'public/data/data2.json';


var     urlParser   = bodyParser.urlencoded({ extended: false });



// router.use(express.static(__dirname + '/views'));

// router.use(express.static(path.join(__dirname, 'views')));
router.get('/index', function(req, res, next) {
  res.render('index');
});
router.get('/departement', function(req, res, next) {
  res.render('departement');
});
router.get('/inscription', function(req, res, next) {
  res.render('inscription');
});

router.post("/departement", urlParser, function (req, res) {
    var data2 = fs.readFileSync(pathFile);
    var list = new Object();
    list = JSON.parse(data2);
    var data = {
        name: req.body.serv,
        cin: req.body.descr,
    };
    list.push(data);
    fs.writeFileSync(pathFile, JSON.stringify(list));
    // res.sendFile("public/html/msgeng.html", { root: __dirname });
    res.redirect('/departement');
  });
  // inscrip
  router.post("/inscription", urlParser, function (req, res) {
    var data3 = fs.readFileSync(pathFile2);
    var list = new Object();
        list = JSON.parse(data3);
    var dat = {
        name: req.body.name,
        cin: req.body.cin,
        email: req.body.email,
        motDePasse: req.body.password
    };
    list.push(dat);
    fs.writeFileSync(pathFile2, JSON.stringify(list));
    // res.sendFile("public/html/msgeng.html", { root: __dirname });
    res.redirect('/inscription');
});




// // end hakam


module.exports = router;
