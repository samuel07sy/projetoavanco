import { Observable } from 'rxjs';
import { PostServices } from './services/PostServices';
import { PostEntity } from './entities/PostEntity';
import { CreatePostDto } from './dtos/CreatePostDto';
export declare class PostController {
    private postServices;
    constructor(postServices: PostServices);
    findAll(): Observable<PostEntity[]>;
    create(createPostDto: CreatePostDto): void;
}
