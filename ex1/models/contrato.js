var mongoose = require("mongoose")

var contratoSchema = new mongoose.Schema({
    idcontrato: Number,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: Number,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: String,
    entidade_comunicante: String,
    fundamentacao: String
  });

module.exports = mongoose.model('contratos', contratoSchema, 'contratos')