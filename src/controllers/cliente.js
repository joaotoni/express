const ClienteController = {
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
          name,
          sobrenome,
          cpf,
          email,
          data_nascimento,
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
module.exports = ClienteController;