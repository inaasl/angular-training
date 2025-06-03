import { NgModule } from "@angular/core";
import { StandaloneComponent } from "./standalone.component";

import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [StandaloneComponent],
  imports: [
    MatButtonModule,
    MatChipsModule,
    MatTableModule
  ],
  exports: [StandaloneComponent]
})
export class StandaloneModule {}
