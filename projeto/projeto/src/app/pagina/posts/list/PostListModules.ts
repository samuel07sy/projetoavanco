import {NgModule} from '@angular/core';
import { PostListComponent } from './PostListComponent';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatTableModule, MatProgressBarModule, MatIconModule} from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule
    
  ],
  exports: [
    PostListComponent
  ],
  providers: [],
 
})
export class PostListModules {
}