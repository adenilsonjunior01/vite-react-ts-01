import React from 'react';
import './App.css';
import data from './mocks/data.json';

export default class MainComponent extends React.Component<{}> {
  public dados = data.mario;

  public totalPrice(valores: Array<any>): number {
    let result = 0;
    valores.map((value) => (result += Number(value.preco.split(' ')[1])));
    return result;
  }

  public precoAlto(totalPrice: any): any {
    if (totalPrice > 10000) {
      return 'Você está gastando muito!';
    } else {
      return '';
    }
  }

  public render() {
    return (
      <section>
      <p>
        Nome: <strong>{this.dados.cliente}</strong>
      </p>
      <p>
        Idade: <strong>{this. dados.idade}</strong>
      </p>
      <p>
        Situação:{' '}
        <strong className={this.dados.ativa ? 'color-verde' : 'color-vermelho'}>
          {this.dados.ativa ? 'Ativa' : 'Inativa'}
        </strong>
      </p>
      <p>
        Total gasto:{' '}
        <strong>
          {this.totalPrice(this.dados.compras).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </p>
      <p>{this.precoAlto(this.totalPrice(this.dados.compras))}</p>
    </section>
    );
  }
}
