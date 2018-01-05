import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IndexComponent } from './index.component'

export const IndexRoutingComponents = [
    IndexComponent
]

const indexRoutes: Routes = [
    { path: '', component: IndexComponent }
]

@NgModule({
    imports: [RouterModule.forChild(indexRoutes)],
    exports: [RouterModule]
})

export class IndexRoutingModule { }