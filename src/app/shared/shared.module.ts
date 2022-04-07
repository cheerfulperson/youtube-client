import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BtnStyleDirective } from './btn-style.directive';

@NgModule({
  declarations: [BtnStyleDirective],
  imports: [CommonModule, FormsModule],
  exports: [
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BtnStyleDirective,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
