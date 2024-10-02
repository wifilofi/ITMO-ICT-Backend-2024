import express from 'express'

import ExchangeController from '../controllers/ExchangeController'

const exchangeRoutes = express.Router()

exchangeRoutes.get('/', ExchangeController.getAllExchanges)
exchangeRoutes.get('/:id', ExchangeController.getUserExchanges)
exchangeRoutes.post('/', ExchangeController.createExchange)
exchangeRoutes.put('/:id', ExchangeController.confirmExchange)
exchangeRoutes.delete('/', ExchangeController.deleteExchange)

export default exchangeRoutes
