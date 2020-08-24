import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFilterPipe } from './text-filter.pipe';

@NgModule({
  declarations: [
    TextFilterPipe
  ],
  exports:[
    TextFilterPipe
  ],
  imports: [
    CommonModule
  ]
})

export class PipesModule { }
