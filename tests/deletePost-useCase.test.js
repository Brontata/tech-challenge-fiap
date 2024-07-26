/* eslint-disable no-undef */
const postRepository = require('../src/repositories/PostRepository');
const DeletePostUseCase = require('../src/usecases/Posts/DeletePostUseCase');

//jest.mock('./src/repositories/PostRepository');
jest.mock('../src/repositories/PostRepository');

describe('DeletePostUseCase', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should delete a post successfully', async () => {
        // Arrange
        const postId = 1;
        postRepository.delete.mockResolvedValue({ success: true });
        
        // Act
        const result = await DeletePostUseCase.execute(postId);
        console.log('result', result);
        // Assert
        expect(result).toEqual({ success: true });
        expect(postRepository.delete).toHaveBeenCalledWith(postId);
    });

    it('should return an error when the delete fails', async () => {
        // Arrange
        const postId = 1;
        const errorMessage = 'Failed to delete';
        postRepository.delete.mockRejectedValue(new Error(errorMessage));
        // Act
        const result = await DeletePostUseCase.execute(postId);
        
        // Assert
        expect(result).toEqual({ error: errorMessage });
        expect(postRepository.delete).toHaveBeenCalledWith(postId);
    });
});
