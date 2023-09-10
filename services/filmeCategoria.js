module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    return {
        all: async (req, res) => {
            try {
                const resposta = await app.db('Filme_categoria')
                    .select()
                    .then(filme_categorias => Sucesso(filme_categorias))
                    .catch(erro => Falha(erro));

                return res.status(200).send({ status: true, data: Finalizar(resposta) });
            } catch (erro) {
                return res.status(400).send({ status: false, erros: erro });
            }
        },
        one: async (req, res) => {
            const { filme_id } = req.params;
            try {
                const resposta = await app.db('Filme_categoria')
                    .select()
                    .where({ filme_id })
                    .then(filme_categorias => Sucesso(filme_categorias))
                    .catch(erro => Falha(erro));

                return res.status(200).send({ status: true, data: Finalizar(resposta) });
            } catch (erro) {
                return res.status(400).send({ status: false, erros: erro });
            }
        }
    }
}