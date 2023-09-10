module.exports = app => {

    const { one, all } = app.services.cliente;

    app.route('/Cliente').get(all);
    app.route('/Cliente/:cliente_id').get(one);
}