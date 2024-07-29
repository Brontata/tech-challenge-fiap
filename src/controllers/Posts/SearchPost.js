const searchPostUseCase = require('../../usecases/Posts/SearchPostUseCase');
class SearchPost {

    async handle(request, response) {
        const { q } = request.query;
        const posts = await searchPostUseCase.execute(q);
        return response.json(posts);
    }
}

module.exports = new SearchPost();
