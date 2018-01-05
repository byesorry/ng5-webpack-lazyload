import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';

export const ListRoutingComponents = [
    ListComponent
]

const listRoutes: Routes = [
    { path: '', component: ListComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(listRoutes) ],
    exports: [ RouterModule ]
})
export class ListRoutingModule {}