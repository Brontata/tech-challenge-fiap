const listAllPostsUseCase = require('../../usecases/Posts/ListAllPostsUseCase');
class ListAllPosts {
    async handle(request, response) {
        const posts = await listAllPostsUseCase.execute();
        return response.json(posts);
    }
}

module.exports = new ListAllPosts();
