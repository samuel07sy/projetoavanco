import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../posts/services/PostService';
import {PostListItem} from '../../posts/services/dataModal/PostListItem';
@Component({
    selector:'app-Post-List',
    templateUrl:'postList.html'
})

export class PostListComponent implements OnInit {
    public postList: Observable<PostListItem[]>;
    
    public displayedColumns: string[] = ['id','title', 'subtitle', 'imageUrl'];

    constructor(private postService: PostService){
    }
    ngOnInit(){
        this.postList = this.postService.getAllPostItems();
    }
}
