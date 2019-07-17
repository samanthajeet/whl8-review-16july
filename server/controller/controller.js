const data = require('../data')

module.exports = {
  getData: (req, res) => {
    console.log('backend hit')
    res.status(200).send(data)
  }
}