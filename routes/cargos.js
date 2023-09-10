module.exports = app => {

    const { one, all } = app.services.cargos;

    app.route('/Cargos').get(all);
    app.route('/Cargos/:funcionarioid').get(one);
}