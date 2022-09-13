import React from 'react';
import './App.css';
import data from './mocks/data.json';

export default class MainComponent extends React.Component<{}> {
  public dados = data.mario;

  public totalPrice(valores: Array<any>): number {
    return valores
      .map((value) => (Number(value.preco.replace('R$ ', ''))))
      .reduce((a, b) => a + b);
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
      {this.totalPrice(this.dados.compras) > 10000 && 'Você está gastando muito!'}
    </section>
    );
  }
}
