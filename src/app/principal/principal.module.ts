import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalPageRoutingModule } from './principal-routing.module';

import { PrincipalPage } from './principal.page';

// import the firstmodal component
import { FirstModalComponent } from './firstmodal/firstmodal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalPageRoutingModule,
  ],
  declarations: [PrincipalPage, FirstModalComponent],
  entryComponents: [FirstModalComponent]
})
export class PrincipalPageModule {}
