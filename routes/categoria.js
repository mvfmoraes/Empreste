module.exports = app => {

    const { one, all } = app.services.categoria;

    app.route('/Categoria').get(all);
    app.route('/Categoria/:categoria_id').get(one);
}