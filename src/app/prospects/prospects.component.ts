import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

const ELEMENT_DATA: any[] = [
  {ep: '', nature_projet: 'Acquisition en VEFA', date_creation: '12/05/2008', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Acquisition', date_creation: '15/05/2004', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Acquisition', date_creation: '12/04/2012', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Acquisition', date_creation: '', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Acquisition', date_creation: '', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Rachat de pret', date_creation: '', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Pret perso', date_creation: '', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Acquisition', date_creation: '', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Acquisition', date_creation: '', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Rachat de pret', date_creation: '', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Acquisition en VEFA', date_creation: '', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Acquisition en VEFA', date_creation: '', porteur: 'H', email: '', proprietaire: ''},
  {ep: '', nature_projet: 'Acquisition', date_creation: '', porteur: 'H', email: '', proprietaire: ''}
];

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.scss']
})
export class ProspectsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['emprunteur_principal', 'nature_projet', 'date_creation', 'porteur', 'email', 'proprietaire', 'actions'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(false, []);
  @ViewChild(MatPaginator) paginator: MatPaginator= new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    
  }

  open_folder() {
    this.router.navigate(['prospects/dossier']);
  }

}
