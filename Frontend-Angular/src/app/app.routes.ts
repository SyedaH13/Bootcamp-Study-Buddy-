import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { QAListComponent } from './qa-list/qa-list.component';
import { QAManagementComponent } from './qa-management/qa-management.component';

export const routes: Routes = [
    { path: 'QA-List', component: QAListComponent},
    { path: 'Favorites', component: FavoritesComponent},
    { path: 'QA-Management', component: QAManagementComponent},

    { path: '', redirectTo: 'QA-List', pathMatch: 'full'} // should it be full?

];
