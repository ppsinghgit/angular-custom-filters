import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterModalComponent } from './filter-modal/filter-modal.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserModule, NgbModule.forRoot()],
  declarations: [AppComponent, HelloComponent, FilterModalComponent],
  bootstrap: [AppComponent],
  entryComponents: [FilterModalComponent],
})
export class AppModule {}
