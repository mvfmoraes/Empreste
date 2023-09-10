module.exports = app => {

    const { one, all } = app.services.detalheperdidos;

    app.route('/Detalheperdidos').get(all);
    app.route('/Detalheperdidos/:detalheid').get(one);
}