import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home.component'

export const HomeRoutingComponents = [
    HomeComponent
]

const homeRouters: Routes = [
    { path: '', component: HomeComponent }
]

@NgModule({
    imports: [RouterModule.forChild(homeRouters)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }