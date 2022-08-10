import { Types } from 'mongoose';
import { IClient } from './IClient';

export interface IClient {
  client: Types.ObjectId;
  clientCurrency: string;
  date: string;
  items: Array<[{
    product: string;
    qtd: number;
    unitValue: number;
  }]>;
  total: number;
  totalClient: number;
}

export interface IClientResponse {
  client: Types.ObjectId;
  clientCurrency: string;
  date: string;
  items: Array<[{
    product: string;
    qtd: number;
    unitValue: number;
  }]>;
  total: number;
  totalClient: number;
  _id: Types.ObjectId;
  __v?: number;
}
