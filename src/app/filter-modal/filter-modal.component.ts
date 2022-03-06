import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  Dropdowndata,
  FilterModel,
  SelectedFilterItem,
  ShowSelectedFiltersCountBySection,
} from './filter-model';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css'],
})
export class FilterModalComponent implements OnInit {
  public regions: Dropdowndata[];
  public areas: Dropdowndata[];
  public territories: Dropdowndata[];
  public primaryDdlData: Dropdowndata[];
  public afterSearch: Dropdowndata[];
  public itemSearched: string;
  public selectedSection: string = 'none';
  public showData: boolean = false;
  public primaryDataHeight: number;

  public selectedFilters: SelectedFilterItem[];
  public filtersCount: ShowSelectedFiltersCountBySection =
    new ShowSelectedFiltersCountBySection();
  public closeResult: string;

  @Input() public filterModel: FilterModel;

  constructor(public activeModal: NgbActiveModal) {
    this.selectedFilters = [];
    this.initiate();
  }

  ngOnInit() {
    console.log(this.filterModel);
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
    debugger;
    this.regions = this.filterModel.regions;
    this.areas = _area as Dropdowndata[];
    this.territories = _territories as Dropdowndata[];
    this.primaryDdlData = [];
    this.afterSearch = [];
    this.itemSearched = '';
  }

  public OnRegionClick() {
    this.selectedSection = sections.Region;
    this.setPrimaryData(this.regions);
  }

  public OnAreaClick() {
    this.selectedSection = sections.Area;
    this.setPrimaryData(this.areas);
  }

  public OnTerritoryClick() {
    this.selectedSection = sections.Territory;
    this.setPrimaryData(this.territories);
  }

  private setPrimaryData(data: Dropdowndata[]) {
    this.primaryDdlData = data;
    this.afterSearch = this.primaryDdlData;
    this.itemSearched = '';
    this.getPrimaryDataHeight();
  }

  public validate() {
    this.afterSearch = this.primaryDdlData;
  }

  onSearchChange(searchValue: string): void {
    this.itemSearched = searchValue;
    this.afterSearch = this.primaryDdlData.filter((x) =>
      x.value.toLowerCase().includes(searchValue.toLowerCase())
    );
    this.getPrimaryDataHeight();
  }

  public checkBoxEvent(selected: boolean, value: string) {
    selected = selected ? false : true;
    for (let i = 0; i < this.afterSearch.length; i++) {
      if (this.afterSearch[i].value == value) {
        this.afterSearch[i].flag = selected;
        if (this.afterSearch[i].flag) {
          let item = new SelectedFilterItem();
          item.value = this.afterSearch[i].text;
          item.type = this.selectedSection;

          this.selectedFilters.push(item);
        } else {
          let index = this.selectedFilters.findIndex(
            (x) =>
              x.value == this.afterSearch[i].text &&
              x.type == this.selectedSection
          );
          if (index > -1) {
            this.selectedFilters.splice(index, 1);
          }
        }
      }
    }
    this.setFiltersCount();
  }

  public radioButtonEvent(selected: boolean, value: string) {
    let item: any = null;
    for (let i = 0; i < this.afterSearch.length; i++) {
      if (this.afterSearch[i].value == value) {
        this.afterSearch[i].flag = selected;
        item = new SelectedFilterItem();
        item.value = this.afterSearch[i].text;
        item.type = this.selectedSection;
        this.selectedFilters.push(item);
      } else {
        this.afterSearch[i].flag = false;
        let index = this.selectedFilters.findIndex(
          (x) =>
            x.value == this.afterSearch[i].text &&
            x.type == this.selectedSection
        );
        if (index > -1) {
          this.selectedFilters.splice(index, 1);
        }
      }
    }
    this.setFiltersCount();
  }

  public showDataClick() {
    if (this.showData) {
      this.showData = false;
    } else {
      this.showData = true;
    }
  }

  public clearAll() {
    this.primaryDdlData = [];
    this.afterSearch = [];
    this.itemSearched = '';
    this.selectedSection = 'none';
    this.selectedFilters = [];
    this.filtersCount.region = 0;
    this.filtersCount.area = 0;
    this.filtersCount.territory = 0;
    this.filtersCount.totalCount = 0;
    this.initiate();
  }

  public onApply() {
    // for (let i = 0; i < this.afterSearch.length; i++) {
    //   this.afterSearch[i].flag = true;
    //   this.selectedFilters.push(this.afterSearch[i].text);
    // }
  }

  getPrimaryDataHeight(): any {
    let scrollBar = '';
    let height = '';

    if (this.afterSearch) {
      if (this.afterSearch.length > 10) {
        this.primaryDataHeight = 300;
      } else {
        this.primaryDataHeight = this.afterSearch.length * 35;
      }
    }

    if (this.primaryDataHeight < 300) {
      scrollBar = 'hidden';
      height = 'auto';
    } else {
      scrollBar = 'scroll';
      height = this.primaryDataHeight + 'px';
    }
    return {
      height: height,
      'overflow-y': scrollBar,
    };
  }

  private setFiltersCount() {
    this.filtersCount.region = this.regions.filter(
      (x) => x.flag == true
    ).length;
    this.filtersCount.area = this.areas.filter((x) => x.flag == true).length;
    this.filtersCount.territory = this.territories.filter(
      (x) => x.flag == true
    ).length;

    this.filtersCount.totalCount =
      this.filtersCount.region +
      this.filtersCount.area +
      this.filtersCount.territory;
  }

  public removeSingleFilter(type: string, value: string) {
    let item: Dropdowndata;
    if (type == sections.Region) {
      this.regions.find((x) => x.value == value).flag = false;
    } else if (type == sections.Area) {
      this.areas.find((x) => x.value == value).flag = false;
    } else if (type == sections.Territory) {
      this.territories.find((x) => x.value == value).flag = false;
    }
    let index = this.selectedFilters.findIndex(
      (x) => x.type == type && x.value == value
    );
    if (index > -1) {
      this.selectedFilters.splice(index, 1);
    }
    this.setFiltersCount();
  }

  public modalOk() {
    this.activeModal.close({ name: 'Fateh', age: 24 });
  }
}

enum sections {
  Region = 'region',
  Area = 'area',
  Territory = 'territory',
}
