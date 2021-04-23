import { Request, Response } from "express"
import { ConnectionsService } from "../services/ConnectionsService";

class ConnectionsController {

    async all(request: Request, response:Response): Promise<Response>{        

        const connectionsService = new ConnectionsService()

        const connections = await connectionsService.allConnection()

        return response.json(connections);
    }
}
export {ConnectionsController }