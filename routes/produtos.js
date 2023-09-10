module.exports = app => {

    const { one, all } = app.services.produtos;

    app.route('/Produtos').get(all);
    app.route('/Produtos/:produtoCode').get(one);
}