module.exports = app => {

    const { one, all } = app.services.cidade;

    app.route('/Cidade').get(all);
    app.route('/Cidade/:cidade_id').get(one);
}