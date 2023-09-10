module.exports = app => {

    const { one, all } = app.services.filme_ator;

    app.route('/FilmeAtor').get(all);
    app.route('/FilmeAtor/:ator_id').get(one);
}