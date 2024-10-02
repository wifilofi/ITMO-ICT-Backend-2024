import sequelize from '../database/index'
import User from '../database/models/User'
import serviceHandleError from '../utils/serviceHandleError'

const userRepository = sequelize.getRepository(User)

type UserDataType = {
	name: string
	email: string
	password: string
}

class UserService {
	static async getUserById(id: number) {
		return userRepository.findByPk(id)
	}

	static async getAllUsers() {
		return userRepository.findAll()
	}

	static async createUser(userData: UserDataType) {
		const { name, email, password } = userData
		return userRepository.create({ name, email, password })
	}

	static async updateUser(id: number, userData: any) {
		const user = await userRepository.findByPk(id)

		if (!user) {
			return serviceHandleError({ message: 'Пользователь не найден' })
		}

		await user.update(userData)

		return user
	}

	static async deleteUser(id: number) {
		const user = await userRepository.findByPk(id)

		if (!user) {
			return serviceHandleError({ message: 'Пользователь не найден' })
		}

		await user.destroy()
	}
}

export default UserService
