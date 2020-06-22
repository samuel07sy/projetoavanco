import { NgModule } from '@angular/core';
import { PostListModules } from './list/PostListModules';
import { PostResouce } from './services/PostResource';
import { PostService } from './services/PostService';

@NgModule({
    imports: [
        PostListModules
    ],
    exports: [
        PostListModules
    ],
    providers: [
        PostResouce,
        PostService
    ],
    declarations: [],
   
  })
  export class PostsModule {
  }