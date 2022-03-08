import { Component, EventEmitter, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { Dropdowndata, FilterModel } from './filter-modal/filter-model';
import { DropdowndataDashboard } from './model';

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
        Value: 'AL',
        Text: 'AL',
      },
      {
        Value: 'AK',
        Text: 'AK',
      },
      {
        Text: 'AS',

        Value: 'AS',
      },
      {
        Text: 'AZ',

        Value: 'AZ',
      },
      {
        Text: 'AR',

        Value: 'AR',
      },
      {
        Text: 'CA',

        Value: 'CA',
      },
      {
        Text: 'CO',

        Value: 'CO',
      },
      {
        Text: 'CT',

        Value: 'CT',
      },
      {
        Text: 'DE',

        Value: 'DE',
      },
      {
        Text: 'DC',

        Value: 'DC',
      },
      {
        Text: 'FM',

        Value: 'FM',
      },
      {
        Text: 'FL',

        Value: 'FL',
      },
      {
        Text: 'GA',

        Value: 'GA',
      },
      {
        Text: 'GU',

        Value: 'GU',
      },
      {
        Text: 'HI',

        Value: 'HI',
      },
      {
        Text: 'ID',

        Value: 'ID',
      },
      {
        Text: 'IL',

        Value: 'IL',
      },
      {
        Text: 'IN',

        Value: 'IN',
      },
      {
        Text: 'IA',

        Value: 'IA',
      },
      {
        Text: 'KS',

        Value: 'KS',
      },
      {
        Text: 'KY',

        Value: 'KY',
      },
      {
        Text: 'LA',

        Value: 'LA',
      },
      {
        Text: 'ME',

        Value: 'ME',
      },
      {
        Text: 'MH',

        Value: 'MH',
      },
      {
        Text: 'MD',

        Value: 'MD',
      },
      {
        Text: 'MA',

        Value: 'MA',
      },
      {
        Text: 'MI',

        Value: 'MI',
      },
      {
        Text: 'MN',

        Value: 'MN',
      },
      {
        Text: 'MS',

        Value: 'MS',
      },
      {
        Text: 'MO',

        Value: 'MO',
      },
      {
        Text: 'MT',

        Value: 'MT',
      },
      {
        Text: 'NE',

        Value: 'NE',
      },
      {
        Text: 'NV',

        Value: 'NV',
      },
      {
        Text: 'NH',

        Value: 'NH',
      },
      {
        Text: 'NJ',

        Value: 'NJ',
      },
      {
        Text: 'NM',

        Value: 'NM',
      },
      {
        Text: 'NY',

        Value: 'NY',
      },
      {
        Text: 'NC',

        Value: 'NC',
      },
      {
        Text: 'ND',

        Value: 'ND',
      },
      {
        Text: 'MP',

        Value: 'MP',
      },
      {
        Text: 'OH',

        Value: 'OH',
      },
      {
        Text: 'OK',

        Value: 'OK',
      },
      {
        Text: 'OR',

        Value: 'OR',
      },
      {
        Text: 'PW',

        Value: 'PW',
      },
      {
        Text: 'PA',

        Value: 'PA',
      },
      {
        Text: 'PR',

        Value: 'PR',
      },
      {
        Text: 'RI',

        Value: 'RI',
      },
      {
        Text: 'SC',

        Value: 'SC',
      },
      {
        Text: 'SD',

        Value: 'SD',
      },
      {
        Text: 'TN',

        Value: 'TN',
      },
      {
        Text: 'TX',

        Value: 'TX',
      },
      {
        Text: 'UT',

        Value: 'UT',
      },
      {
        Text: 'VT',

        Value: 'VT',
      },
      {
        Text: 'VI',

        Value: 'VI',
      },
      {
        Text: 'VA',

        Value: 'VA',
      },
      {
        Text: 'WA',

        Value: 'WA',
      },
      {
        Text: 'WV',

        Value: 'WV',
      },
      {
        Text: 'WI',

        Value: 'WI',
      },
      {
        Text: 'WY',

        Value: 'WY',
      },
    ];

    let _area = [
      { Value: '201', Text: '201', flag: false },
      { Value: '202', Text: '202', flag: false },
      { Value: '203', Text: '203', flag: false },
      { Value: '204', Text: '204', flag: false },
    ];

    let _territories = [
      { Value: 'Ward 1', Text: 'Ward 1', flag: false },
      { Value: 'Ward 2', Text: 'Ward 2', flag: false },
      { Value: 'Ward 3', Text: 'Ward 3', flag: false },
      { Value: 'Ward 4', Text: 'Ward 4', flag: false },
    ];
    this.filterModel = new FilterModel();
    this.filterModel.Regions = this.normaliseDropdownData(
      _region,
      sectionType.SalesHierarchy
    );
    this.filterModel.Areas = this.normaliseDropdownData(
      _area,
      sectionType.SalesHierarchy
    );
    this.filterModel.Territories = this.normaliseDropdownData(
      _territories,
      sectionType.SalesHierarchy
    );
    console.log('filetr model ------------');
    console.log(JSON.stringify(this.filterModel));
  }

  private normaliseDropdownData(
    data: DropdowndataDashboard[],
    type: string
  ): Dropdowndata[] {
    debugger;
    let outputArray: Dropdowndata[] = [];
    let item: Dropdowndata;

    for (let i = 0; i < data.length; i++) {
      item = null;
      item = new Dropdowndata();
      item.Text = data[i].Text;
      item.Value = data[i].Value;
      item.Flag = false;
      item.Type = type;
      outputArray.push(item);
    }

    return outputArray;
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
    console.log('filetr model ------------');
    console.log(JSON.stringify(this.filterModel));
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

enum sectionType {
  SalesHierarchy = 'SalesHierarchy',
  AccountHierarchy = 'AccountHierarchy',
  RetailerAccounts = 'RetailerAccounts',
}
