module.exports = app => {

    const { one, all } = app.services.inventario;

    app.route('/Inventario').get(all);
    app.route('/Inventario/:inventario_id').get(one);
}