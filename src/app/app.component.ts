import { Component } from '@angular/core';
import { Dropdowndata, sections } from './model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public regions: Dropdowndata[];
  public areas: Dropdowndata[];
  public territories: Dropdowndata[];
  public primaryDdlData: Dropdowndata[];
  public afterSearch: Dropdowndata[];
  public itemSearched: string;
  public selectedSection: string = 'none';

  constructor() {
    this.initiate();
  }

  initiate() {
    let _region = [
      { value: 'AK', text: 'AK', flag: false },
      { value: 'AL', text: 'AL', flag: false },
      { value: 'NY', text: 'NY', flag: false },
      { value: 'LA', text: 'LA', flag: false },
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

    this.regions = _region as Dropdowndata[];
    this.areas = _area as Dropdowndata[];
    this.territories = _territories as Dropdowndata[];
    this.primaryDdlData = [];
    this.afterSearch = [];
    this.itemSearched = '';
  }

  public OnRegionClick() {
    this.selectedSection = sections.Region;
    this.primaryDdlData = this.regions;
    this.afterSearch = this.primaryDdlData;
  }

  public OnAreaClick() {
    this.selectedSection = sections.Area;
    this.primaryDdlData = this.areas;
    this.afterSearch = this.primaryDdlData;
  }

  public OnTerritoryClick() {
    this.selectedSection = sections.Territory;
    this.primaryDdlData = this.territories;
    this.afterSearch = this.primaryDdlData;
  }

  public validate() {
    this.afterSearch = this.primaryDdlData;
  }

  onSearchChange(searchValue: string): void {
    this.itemSearched = searchValue;
    if (searchValue) {
      this.afterSearch = this.primaryDdlData.filter((x) =>
        x.value.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }

  public checkBoxEvent(selected: boolean, value: string) {
    for (let i = 0; i < this.afterSearch.length; i++) {
      if (this.afterSearch[i].value == value) {
        this.afterSearch[i].flag = selected;
      }
    }
  }
}

enum sections {
  Region = 'region',
  Area = 'area',
  Territory = 'territory',
}
