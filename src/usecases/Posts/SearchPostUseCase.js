const postRepository = require('../../repositories/PostRepository');
class searchPostUseCase {
    async execute(q) {
    try{
            return await postRepository.search(q);
        }catch(error){
            return { error: error.message };
        }
    }
}

module.exports = new searchPostUseCase();
