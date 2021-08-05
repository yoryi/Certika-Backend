const mildelware = (app, morgan, express) => {
    app.use(morgan('dev'))
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
}
module.exports = {
    mildelware
}