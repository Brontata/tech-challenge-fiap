/* eslint-disable no-undef */

const postRepository = require('../src/repositories/PostRepository');
const UpdatePostUseCase = require('../src/usecases/Posts/UpdatePostUseCase');
jest.mock('../src/repositories/PostRepository');

describe('UpdatePostUseCase', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    }); 

    it('should update a post successfully', async () => {
        // Arrange
        const updatedData = {
            id: 1,
            title: 'new title',
            description: 'new description',}

        postRepository.update.mockResolvedValue({ success: true });
        // Act
        const result = await UpdatePostUseCase.execute(updatedData);
        // Assert
        expect(result).toEqual({ success: true });
        expect(postRepository.update).toHaveBeenCalledWith({...updatedData,slug:'new-title'});
    });

    it('should return an error when the update fails', async () => {
        // Arrange
        const updatedData = {
            id: 1,
            title: 'new title',
            description: 'new description',}
        const errorMessage = 'Failed to update';
        postRepository.update.mockRejectedValue(new Error(errorMessage));
        // Act
        const result = await UpdatePostUseCase.execute(updatedData);
        // Assert
        expect(result).toEqual({ error: errorMessage });
        expect(postRepository.update).toHaveBeenCalledWith({...updatedData,slug:'new-title'});
    });
})