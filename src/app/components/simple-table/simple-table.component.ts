import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { SimpleTableDataSource } from './simple-table-datasource';
import { ShippingService } from '../../services/shipping.service';
import { ShippingModel } from '../../model/shipping.model';

@Component({
    selector: 'app-simple-table',
    templateUrl: './simple-table.component.html',
    styleUrls: ['./simple-table.component.scss'],
    standalone: true,
    imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class SimpleTableComponent implements AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<ShippingModel>;
    dataSource = new SimpleTableDataSource();

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name'];

    constructor(protected shippingService: ShippingService){

    }

    ngAfterViewInit(): void {
        let shippings = this.shippingService.getAllShippings();
        this.dataSource.sort = this.sort;
        this.dataSource.data = shippings;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
