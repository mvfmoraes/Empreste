module.exports = app => {

    const { one, all } = app.services.endereco;

    app.route('/Endereco').get(all);
    app.route('/Endereco/:endereco_id').get(one);
}