/* eslint-disable no-undef */
const postRepository = require('../src/repositories/PostRepository');
const ListAllPostsUseCase = require('../src/usecases/Posts/ListAllPostsUseCase');

jest.mock('../src/repositories/PostRepository');


describe('ListAllPostsUseCase', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const postsDataMock = [
        {
            "id": 1,
            "user_id": 1,
            "title": "Post 1",
            "description": "Descrição do post 1",
            "slug": "post-1",
            "created_at": "2024-07-16T22:22:55.853Z",
            "updated_at": null
        },
        {
            "id": 2,
            "user_id": 1,
            "title": "Post 2",
            "description": "Descrição do post 2",
            "slug": "post-2",
            "created_at": "2024-07-17T00:24:38.409Z",
            "updated_at": null
        }
    ]

    it('should retrieve a post list successfully', async () => {
        //Arrange
        postsList = [
            {
                "id": 1,
                "user_id": 1,
                "title": "Post 1",
                "description": "Descrição do post 1",
                "slug": "post-1",
                "created_at": "2024-07-16T22:22:55.853Z",
                "updated_at": null
            },
            {
                "id": 2,
                "user_id": 1,
                "title": "Post 2",
                "description": "Descrição do post 2",
                "slug": "post-2",
                "created_at": "2024-07-17T00:24:38.409Z",
                "updated_at": null
            }
        ]
        postRepository.findAll.mockResolvedValue(postsDataMock);
        
        
        // Act
        const result = await ListAllPostsUseCase.execute();
        // Assert
        expect(result).toEqual(postsList);
        expect(postRepository.findAll).toHaveBeenCalled(); 
    });
});
