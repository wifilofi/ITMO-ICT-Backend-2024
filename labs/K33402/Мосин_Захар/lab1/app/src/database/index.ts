import dotenv from 'dotenv'

import { Sequelize } from 'sequelize-typescript'

import Book from './models/Book'
import Exchange from './models/Exchange'
import User from './models/User'
import UserHasBook from './models/UserHasBook'

dotenv.config()
console.log(process.env.DB_NAME)
console.log(process.env.DB_USERNAME)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_HOST)
const sequelize = new Sequelize({
	database: process.env.DB_NAME,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	dialect: 'postgres',
	storage: 'db.postgres',
	host: process.env.DB_HOST,
	port: 5432,
	repositoryMode: true,
	logging: console.log,
})

sequelize.addModels([User, Book, UserHasBook, Exchange])

sequelize.sync().then(() => {
	console.log('sync sequelize')
})

async function testConnection() {
	try {
		await sequelize.authenticate()
		console.log('connected')
	} catch (e) {
		console.log('Did not connected because of error: ', e)
	}
}

testConnection()

export default sequelize
