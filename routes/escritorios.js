module.exports = app => {

    const { one, all } = app.services.escritorios;

    app.route('/Escritorios').get(all);
    app.route('/Escritorios/:escritorioCode').get(one);
}