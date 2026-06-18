/* eslint-disable */
import {
  Controller, Get, Post, Put, Delete, Query, Body, Param
} from '@nestjs/common';
import { AppService } from './app.service';
import { Produto } from './modelo/produto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get() // Exemplo: http://localhost:YOUR_PORT
  getStatus(): string {
    return "Node está rodando: " + new Date();
  }

  @Get("/produtos") // Exemplo: http://localhost:YOUR_PORT/produtos
  listarTodosProdutos() {
    console.log("Entrou no método: listarTodosProdutos " + new Date());

    return this.appService.listarTodos();
  }

  @Get("/produto") // Exemplo: http://localhost:YOUR_PORT?codigo=1
  public buscarPorCodigo(@Query('codigo') codigo: number) {
    console.log("Entrou no método: buscarPorCodigo " + new Date());

    return this.appService.buscarPorCodigo(codigo);
  }

  @Post()
  public salvar(@Body() produto: Produto) {
    console.log("Entrou no método: salvar");

    return this.appService.salvar(produto);
  }

  @Put(':codigo')
  public alterar(@Param('codigo') codigo: number, @Body() produto: Produto) {
    console.log("Entrou no método: alterar " + new Date());

    return this.appService.atualizar(codigo, produto);
  }

  @Delete(':codigo')
  public excluir(@Param('codigo') codigo: number) {
    console.log("Entrou no método: delete " + new Date());

    this.appService.excluir(codigo);
  }
}