 module.exports = {
  getClients: async (req, res) => {
    const db = req.app.get('db')
    // console.log(req.session)
    const clients = await db.client.get_clients(req.session.user.id)
    res.status(200).send(clients)
  },

  getClient: async (req, res) => {
    const {clientid} = req.params
    const db = req.app.get('db')
    const [client] = await db.get_one_client(clientid)
    res.status(200).send(client)
  },

  newClient: async(req, res) => {
    const db = req.app.get('db')
    const { 
      first_name, 
      last_name, 
      phone_number, 
      email,
      notes,
      street_address,
      city,
      zip_code,
      state,
      country,
      birthday
      } = req.body
      
    const { id } = req.session.user
    let client = await db.client.check_client(email)
    client = client[0]
    if (client) { return res.status(400).send(`Client already exists`) }
    
    await db.client.new_client({first_name, 
                                last_name, 
                                phone_number, 
                                email,
                                notes,
                                street_address,
                                city,
                                zip_code,
                                state,
                                country,
                                birthday,
                                id})
    const clients = await db.client.get_clients(id)
    
    res.status(200).send(clients)

  },

  editClient: async(req, res) => {

  },

  deleteClient: (req, res) => {


  }
}