import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './modelo/produto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'YOUR_HOST',
      port: YOUR_PORT,
      username: 'YOUR_USERNAME',
      password: 'YOUR_PASSWORD',
      database: 'produtos',
      entities: [Produto],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([Produto]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
