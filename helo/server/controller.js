module.exports = {
    register: (req, res, next) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        console.log(req.body)
        db.register_new_user([username, password]).then(user => {
            res.status(200).send(user[0])
        }).catch(() => res.status(500).send('Did not work'))
    },

    login: (req, res, next) => {
        const {username, password} = req.body;
        console.log(req.query)
        const db = req.app.get('db');
        db.login([username, password]).then(user => {
            res.status(200).send(user[0])
        }).catch(() => res.status(500).send('Did not work'))
    },

    getPosts: (req, res, next) => {
        const db = req.app.get('db');
        const {id, search} = req.query;
        
    }
}