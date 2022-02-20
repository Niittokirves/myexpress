var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/tervehdys',function(request,response)
{
        response.send("Huomenta!");
        console.log("Good Night!");
    });

router.get('/tervehdys/:etunimi',function(request,response){
  response.send('Terve '+request.params.etunimi);
  console.log('Tulostus onnistui!');
});

router.get('/tervehdys/:etunimi/:sukunimi',function(request,response){
  response.send('Tervehdys vaan '+request.params.etunimi+' '+request.params.sukunimi);
  console.log('Tulostus onnistui taas!');
});

router.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

module.exports = router;
