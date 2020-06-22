import { Module } from '@nestjs/common';
import { ProjetoModule } from './projetoava/ProjetoModule';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ProjetoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'projeto-user',
      password: 'projeto',
      database: 'projeto-app',
      entities: [__dirname + '/**/*Entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
