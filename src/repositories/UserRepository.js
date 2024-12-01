const prismaClient = require('../database');
class UserRepository {
    async findAll() {
        return await prismaClient.user.findMany();
    }

    async findById(id) {
        return await prismaClient.user.findUnique({
            where: {
                id: Number(id),
            }
        });
    } 

    async create({ name, email, password, role }) {
        return await prismaClient.user.create({
            data: {
                name,
                email,
                password,
                role
            }
        });
    }

    async update({ id, name, email, password, role, updated_at }) {
        return await prismaClient.user.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
                email,
                password,
                role,
                updated_at
            }
        });
    }

    async delete(id) {
        return await prismaClient.user.delete({
            where: {
                id: Number(id),
            }
        });
    }

    async listUsersByRole(role) {
        return await prismaClient.user.findMany({
            where: {
                role:{ equals: role }
            }
        });
    }
}

module.exports = new UserRepository();
