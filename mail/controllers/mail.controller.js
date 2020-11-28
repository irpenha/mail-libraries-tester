// const crypto = require('crypto');

exports.sendMail = (req, res) => {
    // let salt = crypto.randomBytes(16).toString('base64');
    // let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
    // req.body.password = salt + "$" + hash;
    // req.body.permissionLevel = 1;
    // UserModel.createUser(req.body)
    //     .then((result) => {
    //         res.status(201).send({id: result._id});
    //     });
    console.log("Sending an email!");

    res.status(204).end();
};

exports.listMail = (req, res) => {
    // let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    // let page = 0;
    // if (req.query) {
    //     if (req.query.page) {
    //         req.query.page = parseInt(req.query.page);
    //         page = Number.isInteger(req.query.page) ? req.query.page : 0;
    //     }
    // }
    // UserModel.list(limit, page)
    //     .then((result) => {
    //         res.status(200).send(result);
    //     })
    console.log("Listing emails!");

    res.status(204).end();
};