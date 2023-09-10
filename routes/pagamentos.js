module.exports = app => {

    const { one, all } = app.services.pagamentos;

    app.route('/Pagamentos').get(all);
    app.route('/Pagamentos/:clienteID').get(one);
}