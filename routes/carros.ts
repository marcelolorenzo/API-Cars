import CarrosController from "../controllers/CarrosController";
import * as express from "express";
const carrosRouter = express.Router();

carrosRouter.get('/all', async (req, res) => {
    const result = await new CarrosController().getCarros()
    res.send(result)
});

export { carrosRouter };




