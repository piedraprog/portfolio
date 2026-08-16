import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TableComponent {
  @Input() tableData: any[] = [];
  @Input() tableColums: any[] = [];


}
