module.exports = app => {

    const { one, all } = app.services.idioma;

    app.route('/Idioma').get(all);
    app.route('/Idioma/:idioma_id').get(one);
}