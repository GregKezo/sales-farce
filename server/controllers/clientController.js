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
    
    res.sendStatus(200)

  },

  editClient: async(req, res) => {
    const db = req.app.get('db')
    const {
      new_first_name, 
      new_last_name, 
      new_phone_number, 
      new_email,
      new_notes,
      new_street_address,
      new_city,
      new_zip_code,
      new_state,
      new_country,
      new_birthday
    } = req.body
    const { id } = req.session.user
    const { clientid } = req.params
    const [updatedClient] = await db.client.edit_client({
                                new_first_name, 
                                new_last_name, 
                                new_phone_number, 
                                new_email,
                                new_notes,
                                new_street_address,
                                new_city,
                                new_zip_code,
                                new_state,
                                new_country,
                                new_birthday,
                                id,
                                clientid})
      res.sendStatus(200)
  },

  deleteClient: async (req, res) => {
    const db = req.app.get('db')
    const { clientid } = req.params
    await db.client.delete_client(clientid)

    res.sendStatus(200)

  }
}