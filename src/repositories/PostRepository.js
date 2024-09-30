const prismaClient = require('../database');
class PostRepository {
    async findAll() {
        return await prismaClient.posts.findMany();
    }

    async findById(id) {
        return await prismaClient.posts.findUnique({
            where: {
                id: Number(id),
            }
        });
    }

    async create({ title, description, author, user_id, slug }) {
        return await prismaClient.posts.create({
            data: {
                title,
                description,
                author,
                user_id,
                slug
            }
        });
    }

    async update({ id, title, description, author, slug, updated_at }) {
        return await prismaClient.posts.update({
            where: {
                id: Number(id),
            },
            data: {
                title,
                description,
                author,
                slug,
                updated_at
            }
        });
    }

    async delete(id) {
        return await prismaClient.posts.delete({
            where: {
                id: Number(id),
            }
        });
    }

    async search(q) {
        return await prismaClient.posts.findMany({
            where: {
                AND: [
                    { 
                        OR: [
                            { title: { contains: q } },
                            { description: { contains: q } },
                        ]
                    }
                ]
            }
        });
    }
}

module.exports = new PostRepository();
