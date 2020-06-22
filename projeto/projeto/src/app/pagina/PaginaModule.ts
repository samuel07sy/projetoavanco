import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/PostsModule';

@NgModule({
  declarations: [],
  exports: [
    PostsModule
  ],
  imports: [
    PostsModule,
    HttpClientModule,
    
  ],
  providers: [],
})
export class PaginaModule {
}
