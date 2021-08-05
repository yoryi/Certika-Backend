const mildelware = (app, morgan, express, cors) => {
    app.use(morgan('dev'))
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(cors());
}
module.exports = {
    mildelware
}