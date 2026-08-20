const model =require("../models/fornecedorModel")

//listar
exports.index = async (req, res) => {
    let fornecedor = await model.listar();

    res.render("fornecedor/index", {
        fornecedor,
        fornecedorEditar: null
    });
}