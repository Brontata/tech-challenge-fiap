/* eslint-disable no-undef */

const PostRepository = require("../src/repositories/PostRepository");

PostRepository.create = jest.fn();
PostRepository.findAll = jest.fn();
PostRepository.findById = jest.fn();
PostRepository.update = jest.fn();
PostRepository.delete = jest.fn();
PostRepository.search = jest.fn();

it( "should create a post successfully", async () => {
    const post = {
        id: 1,
        title: "title",
        description: "description",
        user_id: 1,
        slug: "title",
    };
    PostRepository.create.mockResolvedValue(post);
    const result = await PostRepository.create(post);
    expect(result).toEqual(post);
})

/*it("should return an error when the create fails", async () => {
    const errorMessage = "Failed to create post";
    PostRepository.create.mockRejectedValue(new Error(errorMessage));
    const result = await PostRepository.create();
    expect(result).toEqual({ error: errorMessage });
})*/

it("should find all posts successfully", async () => {
    const posts = [
        {
            id: 1,
            title: "title",
            description: "description",
            user_id: 1,
            slug: "title",
        },
        {
            id: 2,
            title: "title",
            description: "description",
            user_id: 1,
            slug: "title",
        },
    ];
    PostRepository.findAll.mockResolvedValue(posts);
    const result = await PostRepository.findAll();
    expect(result).toEqual(posts);
})  

it("should find a post by id successfully", async () => {
    const post = {
        id: 1,
        title: "title",
        description: "description",
        user_id: 1,
        slug: "title",
    };
    PostRepository.findById.mockResolvedValue(post);
    const result = await PostRepository.findById(1);
    expect(result).toEqual(post);
})

it("should update a post successfully", async () => {
    const post = {
        id: 1,
        title: "title",
        description: "description",
        user_id: 1,
        slug: "title",
    };
    PostRepository.update.mockResolvedValue(post);
    const result = await PostRepository.update(post);
    expect(result).toEqual(post);
})

