/* eslint-disable no-undef */
const postRepository = require('../src/repositories/PostRepository');
const SearchPostUseCase = require('../src/usecases/Posts/SearchPostUseCase');

jest.mock('../src/repositories/PostRepository');

describe('SearchPostUseCase', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const postTitle = 'test_title';

    it('should search a post successfully', async () => {
        // Arrange
        postRepository.search.mockResolvedValue({ success: true });
        // Act
        const result = await SearchPostUseCase.execute(postTitle);
        // Assert
        expect(result).toEqual({ success: true });
        expect(postRepository.search).toHaveBeenCalledWith(postTitle);
    });

    it('should return an error when the search fails', async () => {
        // Arrange
        const errorMessage = 'Failed to search';
        postRepository.search.mockRejectedValue(new Error(errorMessage));
        // Act
        const result = await SearchPostUseCase.execute(postTitle);
        // Assert
        expect(result).toEqual({ error: errorMessage });
        expect(postRepository.search).toHaveBeenCalledWith(postTitle);
    });
})