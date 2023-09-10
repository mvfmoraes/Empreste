module.exports = app => {

    const { one, all } = app.services.filme_texto;

    app.route('/Filme_texto').get(all);
    app.route('/Filme_texto/:filme_id').get(one);
}