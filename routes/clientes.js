module.exports = app => {

    const { one, all } = app.services.clientes;

    app.route('/Clientes').get(all);
    app.route('/Clientes/:clienteid').get(one);
}