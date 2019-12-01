import express from "express";
import {Controller} from "./controllers/controller";
import {EventController} from "./controllers/eventController";

// tslint:disable-next-line:max-line-length
import { AuthenticateController } from "./controllers/authenticateController.";
import {UserController} from "./controllers/userController";

export class ApiRouter {
    private router: express.Router = express.Router();
    // private controller: Controller = new Controller();
    private userController: UserController = new UserController();
    private eventController: EventController = new EventController();
    private authController: AuthenticateController = new AuthenticateController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {

        this.router.post("/createuser", this.userController.createUser);
        this.router.put("/user/location", this.userController.UpdateUserLocation);
        // this.router.delete("/user/:user_id/delete", this.userController.deleteuser);
        this.router.post("/event/create_event", this.eventController.createEvent);
        this.router.get("/event", this.eventController.getAllEvents);

        // Authentication
        const authLink = "/authenticate";
        this.router.post(authLink + "/login", this.authController.login);
        this.router.post(authLink + "/register", this.authController.register);

        return this.router;
    }
}
