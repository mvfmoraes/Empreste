module.exports = app => {

    const { one, all } = app.services.funcionarios;

    app.route('/Funcionarios').get(all);
    app.route('/Funcionarios/:funcionarioID').get(one);
}