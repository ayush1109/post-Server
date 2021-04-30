const WishList = require('../models/wishList');

exports.fetchAll = async (req, res, next) => {
    WishList.find({})
        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.deleteAll = async (req, res, next) => {
    WishList.remove({})
        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.write = async (req, res, next) => {
    WishList.create(req.body)
        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.deleteOne = async (req, res, next) => {
    WishList.findByIdAndRemove(req.params.wishListId)
        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.fetchOne = async (req, res, next) => {
    WishList.findById(req.params.wishListId)
        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.update = async (req, res, next) => {
    WishList.findByIdAndUpdate(req.params.wishListId, {
        $set: req.body
    }, { new: true })
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        })
        .catch((err) => next(err));

}
