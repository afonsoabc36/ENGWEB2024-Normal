const mongoose = require('mongoose');
const Contrato = require("../models/contrato");

module.exports.list = () => {
    return Contrato
        .find()
        .exec();
}

module.exports.findById = id => {
    return Contrato
        .findOne({ idcontrato: id })
        .exec();
}

module.exports.findByEntidade = entidade => {
    return Contrato
        .find({ NIPC_entidade_comunicante: entidade })
        .exec();
}

module.exports.findTiposDeProcedimento = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .exec();
}

module.exports.findByTipoProcedimento = tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec();
}



module.exports.listEntidades = () => {
    let camp_name = "entidade_comunicante"
    return Contrato
        .distinct(camp_name)
        .exec();
}

module.exports.listTiposProcedimento = () => {
    return Contrato
        .distinct('tipoprocedimento')
        .sort()
        .exec();
}

module.exports.insert = contrato => {
    var newContrato = new Contrato(contrato);
    return newContrato.save();
}

module.exports.update = (idcontrato, updateContent) => {
    return Contrato.findOneAndUpdate(
        { idcontrato: idcontrato },
        updateContent,
        { new: true }
    );
};

module.exports.remove = id => {
    return Contrato
        .findOneAndDelete({ idcontrato: id });
}
