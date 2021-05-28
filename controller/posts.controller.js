const Post = require('../models/posts');

exports.fetchAll = async (req, res, next) => {
    console.log(req.user._id)
    Post.find({author: req.user._id})
        .populate('author')
        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.deleteAll = async (req, res, next) => {
    Post.remove({})
    .populate('author')

        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.write = async (req, res, next) => {
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            author: req.user._id
        });

        post.save()
        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.deleteOne = async (req, res, next) => {
    Post.findByIdAndRemove(req.params.postId)
    .populate('author')

        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.fetchOne = async (req, res, next) => {
    Post.findById(req.params.postId)
        .populate('author')
        .then((data) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(data);
        })
        .catch((err) => next(err));
}

exports.update = async (req, res, next) => {
    Post.findByIdAndUpdate(req.params.postId, {
        $set: req.body
    }, { new: true })
    .populate('author')

        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        })
        .catch((err) => next(err));

}
