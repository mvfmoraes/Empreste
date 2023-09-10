module.exports = app => {

    const { one, all } = app.services.salarios;

    app.route('/Salarios').get(all);
    app.route('/Salarios/:funcionarioID').get(one);
}