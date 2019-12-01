"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventController_1 = require("./controllers/eventController");
// tslint:disable-next-line:max-line-length
const userController_1 = require("./controllers/userController");
class ApiRouter {
    constructor() {
        this.router = express_1.default.Router();
        // private controller: Controller = new Controller();
        this.userController = new userController_1.UserController();
        this.eventController = new eventController_1.EventController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        this.router.post("/createuser", this.userController.createUser);
        this.router.put("/user/location", this.userController.UpdateUserLocation);
        // this.router.delete("/user/:user_id/delete", this.userController.deleteuser);
        this.router.post("/event/create_event", this.eventController.createEvent);
        this.router.get("/event", this.eventController.getAllEvents);
        return this.router;
    }
}
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=router.js.map