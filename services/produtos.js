module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    return {
        all: async (req, res) => {
            try {
                const resposta = await app.db('Produtos')
                    .select()
                    .then(produtos => Sucesso(produtos))
                    .catch(erro => Falha(erro));

                return res.status(200).send({ status: true, data: Finalizar(resposta) });
            } catch (erro) {
                return res.status(400).send({ status: false, erros: erro });
            }
        },
        one: async (req, res) => {
            const { produtoCode } = req.params;
            try {
                const resposta = await app.db('Produtos')
                    .select()
                    .where({ produtoCode })
                    .then(produtos => Sucesso(produtos))
                    .catch(erro => Falha(erro));

                return res.status(200).send({ status: true, data: Finalizar(resposta) });
            } catch (erro) {
                return res.status(400).send({ status: false, erros: erro });
            }
        }
    }
}