import { Router } from "express";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";
import { MessageController } from "./controller/MessageController";
import { ConnectionsController } from "./controller/ConnectionsController";

const routes = Router() 

const settingsController = new SettingsController();
const usersController = new UsersController()
const messageController = new MessageController()
const connectionsController = new ConnectionsController()

routes.post('/settings', settingsController.create)
routes.get('/settings/:username', settingsController.findByUserNmae)
routes.put('/settings/:username', settingsController.update)

routes.post('/users', usersController.create)
routes.get('/messages/:id', messageController.shoWByUser)

routes.post('/messages', messageController.create)

routes.get('/connections', connectionsController.all)
export {routes};