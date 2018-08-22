var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/users', function (req, res, next) {
    var users = mocks.users.map(function (article) {
            return assign({}, article, {
                id: undefined
            })
        }),
        limit = Number(req.query.limit) || users.length,
        offset = Number(req.query.offset) || 0;

    res.json(users.slice(offset, limit + offset))
});

router.get('/user/:id', function (req, res, next) {
    var user = mocks.users.filter(function (user) {
        return user.id == req.params.id
    })[0];
    if (user) return res.json(user);

    res.status(404).json({error: "not found"});
});

router.post('/user', function (req, res, next) {
    var body = req.body;
    console.log(body);
    // var article = {
    //     id: body.text,
    //     id: Date.now().toString(),
    //     user: body.user,
    //     date: new Date()
    // };
    // mocks.articles.push(article);
    // res.json(article)
});

module.exports = router;
