const express = require('express');
const DBconnect = require('../middlewares/DBconnect');
const errorMessages = require('../functions/errorMesages');
const bookSchema = require('../models/book');
const router = express.Router();

/* GET users listing. */
router.post('/', DBconnect, async function(req, res) {
  try {
    //#swagger.tags = ['Livro']
    let { titulo, num_paginas, isbn, editora} = req.body;
    const BDanswer = await bookSchema.create({titulo, num_paginas, isbn, editora})

    res.status(200).json({
      status: "ok",
      statusMensagem: "Livro Criado com sucesso",
      resposta: BDanswer,
    })
  } catch(error){
    return errorMessages(res,error);
  }
});

module.exports = router;
