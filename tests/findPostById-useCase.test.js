/* eslint-disable no-undef */
const postRepository = require('../src/repositories/PostRepository');
const FindPostByIdUseCase = require('../src/usecases/Posts/FindPostByIdUseCase');

jest.mock('../src/repositories/PostRepository');


describe('FindPostByIdUseCase', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const postDataMock = {
            "id": 1,
            "user_id": 1,
            "title": "Post 1",
            "description": "Descrição do post 1",
            "slug": "post-1",
            "created_at": "2024-07-16T22:22:55.853Z",
            "updated_at": null
        }
    

    it('should retrieve a post successfully', async () => {
        //Arrange
        postId = 1
        postRepository.findById.mockResolvedValue(postDataMock);
        
        // Act
        const result = await FindPostByIdUseCase.execute(1);
        // Assert
        expect(result).toEqual(postDataMock);
        expect(result.slug).toEqual('post-1');
        expect(result.id).toEqual(postId);
        expect(postRepository.findById).toHaveBeenCalledWith(postId); 
    });

    it('should return an error message when findById throws an error', async () => {
        const mockError = new Error('Generic error message');
        postRepository.findById.mockRejectedValue(mockError);

        const result = await FindPostByIdUseCase.execute(1);

        expect(result).toEqual({ error: 'Generic error message' });
        expect(postRepository.findById).toHaveBeenCalledWith(1);
    });
});
