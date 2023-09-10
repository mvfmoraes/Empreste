module.exports = app => {

    const { one, all } = app.services.departamentofuncionario;

    app.route('/Departamentofuncionario').get(all);
    app.route('/Departamentofuncionario/:funcionarioid').get(one);
}