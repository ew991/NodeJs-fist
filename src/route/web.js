import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displaygetCRUD);
    router.get('/edit-crud', homeController.geteditCRUD);
    router.post('/put-crud', homeController.puteditCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);


    return app.use("/", router);
}
module.exports = initWebRouters;