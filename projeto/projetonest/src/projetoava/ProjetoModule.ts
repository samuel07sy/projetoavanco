import {Module} from '@nestjs/common';
import { PostServices } from './services/PostServices';
import { PostController } from './PostController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entities/PostEntity'; 



@Module({
    imports: [
        TypeOrmModule.forFeature([PostEntity]),
    ],
    controllers: [
        PostController,
    ],
    providers: [
        PostServices,
    ]
})
export class ProjetoModule{
}