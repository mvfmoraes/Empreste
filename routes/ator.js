module.exports = app => {

    const { one, all } = app.services.ator;

    app.route('/Ator').get(all);
    app.route('/Ator/:ator_id').get(one);
}