/* eslint-disable no-undef */
const postRepository = require('../src/repositories/PostRepository');
const CreatePostUseCase = require('../src/usecases/Posts/CreatePostUseCase');

jest.mock('../src/repositories/PostRepository');


describe('CreatePostUseCase', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const postData = {
        title : 'title',
        description: 'description',
        user_id: 1,
   };

    it('should create a post successfully', async () => {

        postRepository.create.mockResolvedValue({ success: true });
        
        
        // Act
        const result = await CreatePostUseCase.execute(postData);
        // Assert
        expect(result).toEqual({ success: true });

        expect(postRepository.create).toHaveBeenCalledWith(
          {...postData,slug:'title'}
        ); 
    });

    it('should return an error when the create fails', async () => {
        
        // Arrange
        const errorMessage = 'Failed to create post';
        postRepository.create.mockRejectedValue(new Error(errorMessage));
        
        // Act
        const result = await CreatePostUseCase.execute(postData);
        
        // Assert
        expect(result).toEqual({ error: errorMessage });
        expect(postRepository.create).toHaveBeenCalledWith(postData);
    });
});
