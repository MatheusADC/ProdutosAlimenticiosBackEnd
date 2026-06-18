/* eslint-disable */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './modelo/produto';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Produto)
    private produtoRepositorio: Repository<Produto>
  ) { }

  public listarTodos(): Promise<Produto[]> {
    return this.produtoRepositorio.find();
  }

  public async buscarPorCodigo(codigo: number): Promise<Produto> {
    const produto = await this.produtoRepositorio.findOneBy({ codigo });

    // Verifica se o produto existe no banco de dados
    if (!produto) {
      throw new NotFoundException('Produto não econtrado');
    }

    return produto;
  }

  public async salvar(produto: Produto): Promise<Produto> {
    const novoProduto = await this.produtoRepositorio.save(produto);
    return novoProduto;
  }

  public async atualizar(codigo: number, produto: Produto): Promise<Produto> {
    const editProduto = await this.produtoRepositorio.findOneBy({ codigo });

    // Verifica se o produto existe no banco de dados
    if (!editProduto) {
      throw new NotFoundException('Produto não econtrado');
    }

    editProduto.descricao = produto.descricao;
    editProduto.marca = produto.marca;
    editProduto.valor = produto.valor;

    // Salva as alterações
    await this.produtoRepositorio.save(editProduto);

    // Retorna o registro alterado
    return editProduto;
  }

  public async excluir(codigo: number): Promise<void> {
    await this.produtoRepositorio.delete(codigo)
  }
}