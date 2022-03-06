import { Component, EventEmitter, Output } from '@angular/core';
import {
  Dropdowndata,
  ShowSelectedFiltersCountBySection,
  SelectedFilterItem,
} from './model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { FilterModel } from './filter-modal/filter-model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public closeResult: string;
  public filterModel: FilterModel;

  constructor(private modalService: NgbModal) {
    this.initiate();
  }

  initiate() {
    let _region = [
      {
        value: 'AL',
        text: 'AL',
        flag: false,
      },
      {
        value: 'AK',
        text: 'AK',
        flag: false,
      },
      {
        text: 'AS',
        flag: false,
        value: 'AS',
      },
      {
        text: 'AZ',
        flag: false,
        value: 'AZ',
      },
      {
        text: 'AR',
        flag: false,
        value: 'AR',
      },
      {
        text: 'CA',
        flag: false,
        value: 'CA',
      },
      {
        text: 'CO',
        flag: false,
        value: 'CO',
      },
      {
        text: 'CT',
        flag: false,
        value: 'CT',
      },
      {
        text: 'DE',
        flag: false,
        value: 'DE',
      },
      {
        text: 'DC',
        flag: false,
        value: 'DC',
      },
      {
        text: 'FM',
        flag: false,
        value: 'FM',
      },
      {
        text: 'FL',
        flag: false,
        value: 'FL',
      },
      {
        text: 'GA',
        flag: false,
        value: 'GA',
      },
      {
        text: 'GU',
        flag: false,
        value: 'GU',
      },
      {
        text: 'HI',
        flag: false,
        value: 'HI',
      },
      {
        text: 'ID',
        flag: false,
        value: 'ID',
      },
      {
        text: 'IL',
        flag: false,
        value: 'IL',
      },
      {
        text: 'IN',
        flag: false,
        value: 'IN',
      },
      {
        text: 'IA',
        flag: false,
        value: 'IA',
      },
      {
        text: 'KS',
        flag: false,
        value: 'KS',
      },
      {
        text: 'KY',
        flag: false,
        value: 'KY',
      },
      {
        text: 'LA',
        flag: false,
        value: 'LA',
      },
      {
        text: 'ME',
        flag: false,
        value: 'ME',
      },
      {
        text: 'MH',
        flag: false,
        value: 'MH',
      },
      {
        text: 'MD',
        flag: false,
        value: 'MD',
      },
      {
        text: 'MA',
        flag: false,
        value: 'MA',
      },
      {
        text: 'MI',
        flag: false,
        value: 'MI',
      },
      {
        text: 'MN',
        flag: false,
        value: 'MN',
      },
      {
        text: 'MS',
        flag: false,
        value: 'MS',
      },
      {
        text: 'MO',
        flag: false,
        value: 'MO',
      },
      {
        text: 'MT',
        flag: false,
        value: 'MT',
      },
      {
        text: 'NE',
        flag: false,
        value: 'NE',
      },
      {
        text: 'NV',
        flag: false,
        value: 'NV',
      },
      {
        text: 'NH',
        flag: false,
        value: 'NH',
      },
      {
        text: 'NJ',
        flag: false,
        value: 'NJ',
      },
      {
        text: 'NM',
        flag: false,
        value: 'NM',
      },
      {
        text: 'NY',
        flag: false,
        value: 'NY',
      },
      {
        text: 'NC',
        flag: false,
        value: 'NC',
      },
      {
        text: 'ND',
        flag: false,
        value: 'ND',
      },
      {
        text: 'MP',
        flag: false,
        value: 'MP',
      },
      {
        text: 'OH',
        flag: false,
        value: 'OH',
      },
      {
        text: 'OK',
        flag: false,
        value: 'OK',
      },
      {
        text: 'OR',
        flag: false,
        value: 'OR',
      },
      {
        text: 'PW',
        flag: false,
        value: 'PW',
      },
      {
        text: 'PA',
        flag: false,
        value: 'PA',
      },
      {
        text: 'PR',
        flag: false,
        value: 'PR',
      },
      {
        text: 'RI',
        flag: false,
        value: 'RI',
      },
      {
        text: 'SC',
        flag: false,
        value: 'SC',
      },
      {
        text: 'SD',
        flag: false,
        value: 'SD',
      },
      {
        text: 'TN',
        flag: false,
        value: 'TN',
      },
      {
        text: 'TX',
        flag: false,
        value: 'TX',
      },
      {
        text: 'UT',
        flag: false,
        value: 'UT',
      },
      {
        text: 'VT',
        flag: false,
        value: 'VT',
      },
      {
        text: 'VI',
        flag: false,
        value: 'VI',
      },
      {
        text: 'VA',
        flag: false,
        value: 'VA',
      },
      {
        text: 'WA',
        flag: false,
        value: 'WA',
      },
      {
        text: 'WV',
        flag: false,
        value: 'WV',
      },
      {
        text: 'WI',
        flag: false,
        value: 'WI',
      },
      {
        text: 'WY',
        flag: false,
        value: 'WY',
      },
    ];

    let _area = [
      { value: '201', text: '201', flag: false },
      { value: '202', text: '202', flag: false },
      { value: '203', text: '203', flag: false },
      { value: '204', text: '204', flag: false },
    ];

    let _territories = [
      { value: 'Ward 1', text: 'Ward 1', flag: false },
      { value: 'Ward 2', text: 'Ward 2', flag: false },
      { value: 'Ward 3', text: 'Ward 3', flag: false },
      { value: 'Ward 4', text: 'Ward 4', flag: false },
    ];
    this.filterModel = new FilterModel();
    this.filterModel.regions = _region as Dropdowndata[];
    this.filterModel.areas = _area as Dropdowndata[];
    this.filterModel.territories = _territories as Dropdowndata[];
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openModal() {
    debugger;
    const modalRef = this.modalService.open(FilterModalComponent);
    modalRef.componentInstance.filterModel = this.filterModel;
    modalRef.result.then((result) => {
      if (result) {
        console.log('result: ' + JSON.stringify(result));
      }
    });
  }
}

enum sections {
  Region = 'region',
  Area = 'area',
  Territory = 'territory',
}
