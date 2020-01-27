module.exports = (req, res, next) => {
  if (!req.session.user.loggedIn) return res.status(401).send('Not authorized');
  next()
}