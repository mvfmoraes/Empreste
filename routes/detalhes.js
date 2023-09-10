module.exports = app => {

    const { one, all } = app.services.detalhes;

    app.route('/Detalhes').get(all);
    app.route('/Detalhes/:detalheid').get(one);
}