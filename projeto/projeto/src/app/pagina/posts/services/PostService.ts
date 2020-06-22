import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { PostListItem } from './dataModal/PostListItem';
import { PostResouce } from './PostResource';


@Injectable()
export class PostService {
    getAllPostItems(): Observable<PostListItem[]> {
        throw new Error("Method not implemented.");
    }
    constructor(private postResource: PostResouce) {
    }
    public getAllPostLisItem(): Observable<PostListItem[]> {
        return this.postResource.findAll();
    }
}