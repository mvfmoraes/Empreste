module.exports = app => {

    const { one, all } = app.services.filme;

    app.route('/Filme').get(all);
    app.route('/Filme/:filme_id').get(one);
}