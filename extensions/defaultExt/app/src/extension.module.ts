import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { actionListFieldMetadata } from './fields/action-list/action-list.metadata';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    actionListFieldMetadata
  ]
})
export class ExtensionModule {
  constructor() {}
  init(): void {}
}
 
