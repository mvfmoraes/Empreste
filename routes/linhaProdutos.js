module.exports = app => {

    const { one, all } = app.services.linhaprodutos;

    app.route('/LinhaProdutos').get(all);
    app.route('/LinhaProdutos/:linhaproduto').get(one);
}