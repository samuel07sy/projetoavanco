import {Controller, Get, Post, Body} from '@nestjs/common';
import {Observable} from 'rxjs';
import {PostServices} from './services/PostServices';
import {PostEntity} from './entities/PostEntity';
import { CreatePostDto } from './dtos/CreatePostDto';

@Controller('posts')
export class PostController {
    constructor(private postServices: PostServices) {

    }
    
    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postServices.findAll();
    }
    @Post()
    create(@Body() createPostDto: CreatePostDto){
    return  this.postServices.create(createPostDto);
    }
}