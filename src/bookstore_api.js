const router = require('express').Router();

// router.get('/', function(req,res){
//     res.send('OK')
// });
router.get('/livros', function(req,res){
    res.send('OK')
});
router.get('/livros/:id', function(req,res){

});
router.post('/livros/cadastro', function(req,res){

});
router.put('/livros/:id', function(req,res){

});
router.delete('/livros/:id', function(req,res){

});

module.exports = router;