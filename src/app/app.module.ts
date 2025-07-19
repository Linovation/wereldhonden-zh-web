import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { DogDetailComponent } from './components/dog-detail/dog-detail.component';

const routes: Routes = [
  { path: '', component: DogListComponent },
  { path: 'dogs/:name', component: DogDetailComponent }
];

@NgModule({
  declarations: [AppComponent, DogListComponent, DogDetailComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}