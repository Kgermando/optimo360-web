import { Component, inject, OnInit, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
} from 'ng-apexcharts';
import { ApiService } from '../../core/services/api.service';
import { AuthService } from '../../core/services/auth.service';
import { DashboardStats } from '../../core/models';

@Component({
  selector: 'app-dashboard',
  imports: [
    DecimalPipe,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    NgApexchartsModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent implements OnInit {
  private api = inject(ApiService);
  auth = inject(AuthService);

  loading = signal(true);
  stats = signal<DashboardStats | null>(null);

  lineChart: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    legend: ApexLegend;
    dataLabels: ApexDataLabels;
    fill: ApexFill;
    grid: ApexGrid;
  } | null = null;

  donutChart: {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    legend: ApexLegend;
    plotOptions: ApexPlotOptions;
    dataLabels: ApexDataLabels;
  } | null = null;

  barChart: {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    plotOptions: ApexPlotOptions;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
  } | null = null;

  hasBilletsMain(): boolean {
    const b = this.stats()?.billetterie_main?.billets;
    return !!b?.some((x) => x.quantite > 0);
  }

  hasEncaissements(): boolean {
    const s = this.stats();
    if (!s) return false;
    return s.encaissements_par_jour.some((d) => d.fc > 0 || d.usd > 0);
  }

  hasRepartition(): boolean {
    const s = this.stats();
    if (!s) return false;
    return s.total_encaissements_fc > 0 || s.total_encaissements_usd > 0;
  }

  ngOnInit() {
    this.api.getDashboardStats().subscribe({
      next: (s) => {
        this.stats.set(s);
        this.buildCharts(s);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  formatMontant(fc: number, usd: number): string {
    const parts: string[] = [];
    if (fc > 0) parts.push(`${fc.toLocaleString('fr-FR')} FC`);
    if (usd > 0) parts.push(`${usd.toLocaleString('fr-FR')} USD`);
    return parts.join(' + ') || '0';
  }

  private buildCharts(s: DashboardStats) {
    const dates = s.encaissements_par_jour.map((d) => d.date);

    this.lineChart = {
      series: [
        { name: 'FC', data: s.encaissements_par_jour.map((d) => d.fc) },
        { name: 'USD', data: s.encaissements_par_jour.map((d) => d.usd) },
      ],
      chart: { type: 'area', height: 300, toolbar: { show: false }, fontFamily: 'Inter, sans-serif' },
      xaxis: { categories: dates, labels: { style: { colors: '#5a6f60', fontSize: '12px' } } },
      yaxis: { labels: { formatter: (v) => v.toLocaleString('fr-FR'), style: { colors: '#5a6f60' } } },
      stroke: { curve: 'smooth', width: 2.5 },
      tooltip: { theme: 'light', y: { formatter: (v) => v.toLocaleString('fr-FR') } },
      legend: { position: 'top', horizontalAlign: 'right', fontSize: '13px' },
      dataLabels: { enabled: false },
      grid: { borderColor: '#e8efe9', strokeDashArray: 4 },
      fill: {
        type: 'gradient',
        gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.02 },
      },
    };

    this.donutChart = {
      series: s.repartition_devises.map((d) => d.value),
      chart: { type: 'donut', height: 260, fontFamily: 'Inter, sans-serif' },
      labels: s.repartition_devises.map((d) => d.label),
      legend: { position: 'bottom', fontSize: '13px' },
      plotOptions: { pie: { donut: { size: '68%', labels: { show: true, total: { show: true, label: 'Total' } } } } },
      dataLabels: { enabled: false },
    };

    this.barChart = {
      series: [
        { name: 'FC', data: s.top_agents.map((a) => a.total_fc) },
        { name: 'USD', data: s.top_agents.map((a) => a.total_usd) },
      ],
      chart: { type: 'bar', height: 260, toolbar: { show: false }, fontFamily: 'Inter, sans-serif' },
      xaxis: { categories: s.top_agents.map((a) => a.nom), labels: { style: { fontSize: '12px' } } },
      plotOptions: { bar: { horizontal: true, borderRadius: 6, barHeight: '60%' } },
      dataLabels: { enabled: false },
      legend: { position: 'top', fontSize: '13px' },
    };
  }
}
