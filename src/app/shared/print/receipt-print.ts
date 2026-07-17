import { Component, input } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { PrintData } from '../../core/models';

@Component({
  selector: 'app-receipt-print',
  imports: [DatePipe, DecimalPipe],
  templateUrl: './receipt-print.html',
  styleUrl: './receipt-print.scss',
})
export class ReceiptPrintComponent {
  data = input.required<PrintData>();

  print() {
    window.print();
  }
}
