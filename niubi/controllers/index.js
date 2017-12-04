var ProfileController = require('./ProfileController')
var PostController = require('./PostController')
var CommentController = require('./CommentController')

module.exports = {

	post: PostController,
	comment: CommentController,
	profile: ProfileController
	
}