module.exports = app => {

    const { one, all } = app.services.aluguel;

    app.route('/Aluguel').get(all);
    app.route('/Aluguel/:aluguel_id').get(one);
}