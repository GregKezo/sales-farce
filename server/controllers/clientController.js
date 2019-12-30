 module.exports = {
  getClients: async (req, res) => {
    const db = req.app.get('db')
    // console.log(req.session)
    const clients = await db.client.get_clients(req.session.user.id)
    res.status(200).send(clients)
  },

  newClient: async(req, res) => {

  },

  editClient: async(req, res) => {

  },

  deleteClient: (req, res) => {


  }
}