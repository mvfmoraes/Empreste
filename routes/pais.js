module.exports = app => {

    const { one, all } = app.services.pais;

    app.route('/Pais').get(all);
    app.route('/Pais/:pais_id').get(one);
}