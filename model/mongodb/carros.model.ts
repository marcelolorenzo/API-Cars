import { Schema, model, connect } from 'mongoose';

interface ICarro {
    marca: string;
    modelo: string;
    preco: number;
  }

  const carroSchema = new Schema<ICarro>({
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    preco: { type: Number, required: true },
  });

  const carroModel = model<ICarro>('Carro', carroSchema);


  export {carroModel, ICarro};







