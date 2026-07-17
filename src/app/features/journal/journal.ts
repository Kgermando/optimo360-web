import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApiService } from '../../core/services/api.service';
import { JournalEntry } from '../../core/models';

@Component({
  selector: 'app-journal',
  imports: [DatePipe, MatCardModule, MatIconModule, MatTableModule, MatProgressSpinnerModule],
  templateUrl: './journal.html',
  styleUrl: './journal.scss',
})
export class JournalComponent implements OnInit {
  private api = inject(ApiService);

  entries = signal<JournalEntry[]>([]);
  total = signal(0);
  loading = signal(true);
  columns = ['created_at', 'user', 'action', 'description'];

  ngOnInit() {
    this.api.getJournal().subscribe({
      next: (res) => {
        this.entries.set(res.data);
        this.total.set(res.total);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  actionIcon(action: string): string {
    const icons: Record<string, string> = {
      encaissement: 'payments',
      transfert: 'swap_horiz',
      retrait: 'money_off',
      unlock: 'lock_open',
      lock: 'lock',
      user: 'person',
      auth: 'login',
    };
    return icons[action] || 'history';
  }
}
