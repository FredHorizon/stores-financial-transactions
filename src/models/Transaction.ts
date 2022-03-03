// Responsável por preparar as classes dos objetos que serão criados(instanciados) de fato. Geralmente os objetos são criados nos Services.
import { v4 as uuid } from 'uuid';

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, value, type }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
