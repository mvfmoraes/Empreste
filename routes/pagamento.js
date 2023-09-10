module.exports = app => {

    const { one, all } = app.services.pagamento;

    app.route('/Pagamento').get(all);
    app.route('/Pagamento/:pagamento_id').get(one);
}