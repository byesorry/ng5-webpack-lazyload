import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './components/error/NotFound.component'

export const appRoutingComponents = [
    PageNotFoundComponent
]

const appRoutes: Routes = [
    { path: 'index', loadChildren: './modules/index/index.module#IndexModule?chunkName=pages/index' },
    { path: 'list', loadChildren: './modules/list/list.module#ListModule?chunkName=pages/list' },

    { path: 'home', loadChildren: './modules/home/home.module#HomeModule?chunkName=pages/home' },

    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            // useHash: true,
            // enableTracing: true // <-- debugging purposes only
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }