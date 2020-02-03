const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const {email, password} = req.body
    const {session} = req
    const db = req.app.get('db')
    const [user] = await db.user.check_user(email)

    if(user) { return res.status(400).send('Email is taken') }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const [newUser] = await db.user.register_user({email, hash})
    delete newUser.password
    session.user = {...newUser, loggedIn: true }
    res.status(201).send(session.user)
  }

  ,login: async (req, res) => {
    const { email, password } = req.body
    const db = req.app.get('db')
    const {session} = req;
    const [user] = await db.user.check_user(email)
      session.user = {
        loggedIn: false
      }
    if (!user) return res.status(401).send(session.user, 'Email not found') 
    const authorized = bcrypt.compareSync(password, user.password)
    if(authorized) {
      delete user.password
      session.user = {
        ...user,
        loggedIn: true
      }
      res.status(202).send(session.user)
    } else res.status(401).send('Incorrect username or password')
    
  }

  ,logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  }

  ,getUser(req, res) {
    res.send(req.session.user)
  }



}