import { carroModel, ICarro } from "../model/mongodb/carros.model";


class CarrosController{


    public async getCarros(): Promise<ICarro[]>{
        
        try{
            const result = await carroModel.find();
            console.log(result)
            return result

       }catch(err){
        console.log(`Erro ao ler dados de Carros ${err}`)
        return []
       }
    }
}


export default CarrosController;