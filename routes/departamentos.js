module.exports = app => {

    const { one, all } = app.services.departamentos;

    app.route('/Departamentos').get(all);
    app.route('/Departamentos/:deptid').get(one);
}