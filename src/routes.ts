import { Router } from "express";
import { SettingsController } from "./controller/SettingsController";
import { UsersController } from "./controller/UsersController";
import { MessageController } from "./controller/MessageController";

const routes = Router() 

const settingsController = new SettingsController();
const usersController = new UsersController()
const messageController = new MessageController()

routes.post('/settings', settingsController.create)

routes.post('/users', usersController.create)
routes.get('/messages/:id', messageController.shoWByUser)

routes.post('/messages', messageController.create)
export {routes};