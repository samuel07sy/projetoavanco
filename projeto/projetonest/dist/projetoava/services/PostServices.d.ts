import { Observable } from 'rxjs';
import { PostEntity } from '../entities/PostEntity';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/CreatePostDto';
export declare class PostServices {
    private readonly postRepository;
    constructor(postRepository: Repository<PostEntity>);
    findAll(): Observable<PostEntity[]>;
    create(createPostDto: CreatePostDto): void;
}
