import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule, ListRoutingComponents } from './list-routing.module';

@NgModule({
    declarations: [
        ListRoutingComponents
    ],
    imports: [
        CommonModule,
        ListRoutingModule,
    ]
})
export class ListModule {}