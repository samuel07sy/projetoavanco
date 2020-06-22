import {Injectable} from '@angular/core';

import { ApiConfig } from '../../ApiConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostListItem } from './dataModal/PostListItem';


@Injectable()
export class PostResouce {
    private readonly URL = ApiConfig.url + '/posts';

    constructor(private httpClient:HttpClient){
    }
    public findAll():Observable<PostListItem[]>{
        return this.httpClient.get(this.URL) as Observable<PostListItem[]>;
    }
}
