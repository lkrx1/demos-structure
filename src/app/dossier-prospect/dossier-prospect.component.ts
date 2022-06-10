import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dossier-prospect',
  templateUrl: './dossier-prospect.component.html',
  styleUrls: ['./dossier-prospect.component.scss']
})
export class DossierProspectComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});

  ngOnInit(): void {
  }

}
