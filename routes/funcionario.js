module.exports = app => {

    const { one, all } = app.services.funcionario;

    app.route('/Funcionario').get(all);
    app.route('/Funcionario/:funcionario_id').get(one);
}