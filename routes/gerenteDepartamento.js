module.exports = app => {

    const { one, all } = app.services.gerentedepartamento;

    app.route('/Gerentedepartamento').get(all);
    app.route('/Gerentedepartamento/:deptID').get(one);
}