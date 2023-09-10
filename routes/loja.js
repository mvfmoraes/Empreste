module.exports = app => {

    const { one, all } = app.services.loja;

    app.route('/Loja').get(all);
    app.route('/Loja/:loja_id').get(one);
}