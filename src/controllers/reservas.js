const ReservasController = {
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
          data_reserva,
          data_limite_devolucao,
          total,
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
    
module.exports = ReservasController;


