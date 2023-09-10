module.exports = app => {

    const { one, all } = app.services.filme_categoria;

    app.route('/Filme_categoria').get(all);
    app.route('/Filme_categoria/:filme_id').get(one);
}