module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    return {
        all: async (req, res) => {
            try {
                const resposta = await app.db('Gerentedepartamento')
                    .select()
                    .then(gerentedepartamentos => Sucesso(gerentedepartamentos))
                    .catch(erro => Falha(erro));

                return res.status(200).send({ status: true, data: Finalizar(resposta) });
            } catch (erro) {
                return res.status(400).send({ status: false, erros: erro });
            }
        },
        one: async (req, res) => {
            const { deptID } = req.params;
            try {
                const resposta = await app.db('Gerentedepartamento')
                    .select()
                    .where({ deptID })
                    .then(gerentedepartamentos => Sucesso(gerentedepartamentos))
                    .catch(erro => Falha(erro));

                return res.status(200).send({ status: true, data: Finalizar(resposta) });
            } catch (erro) {
                return res.status(400).send({ status: false, erros: erro });
            }
        }
    }
}