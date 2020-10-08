module.exports = (req, res) => {
    const { name = 'World1' } = req.query
    res.send(`Hello ${name}!`)
}