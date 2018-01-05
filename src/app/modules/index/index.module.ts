import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IndexRoutingComponents, IndexRoutingModule } from './index-routing.module'

@NgModule({
    declarations: [
        IndexRoutingComponents
    ],
    imports: [
        CommonModule,
        IndexRoutingModule
    ]
})

export class IndexModule { }