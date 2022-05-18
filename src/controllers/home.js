const HomeController = {
  index: (req, res) => {
    res.json([]);
  },
  store: (req, res) => {
    res.json(req.body);
  },
  show: (req, res) => {
    const { id } = req.params;

    res.json({
        id,
        logadouro,
        numero,
        cep,
        bairro,
        cidade,
        estado,
        cliente_codigo,
    });
  },
  update: (req, res) => {
    const { id } = req.params;

    res.json({
      id,
      ...(req.body || {}),
    });
},
destroy: (req, res) => {
    res.status(204).send("");
},
};


module.exports = HomeController;