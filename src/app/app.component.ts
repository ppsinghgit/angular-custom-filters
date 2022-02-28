import { Component } from '@angular/core';
import { Dropdowndata } from './model';

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
  public showData: boolean = false;

  public selectedFilters: string[];

  constructor() {
    this.initiate();
    this.selectedFilters = [];
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
  }

  public validate() {
    this.afterSearch = this.primaryDdlData;
  }

  onSearchChange(searchValue: string): void {
    this.itemSearched = searchValue;
    this.afterSearch = this.primaryDdlData.filter((x) =>
      x.value.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  public checkBoxEvent(selected: boolean, value: string) {
    for (let i = 0; i < this.afterSearch.length; i++) {
      if (this.afterSearch[i].value == value) {
        this.afterSearch[i].flag = selected;
        if (this.afterSearch[i].flag) {
          this.selectedFilters.push(this.afterSearch[i].text);
        } else {
          let index = this.selectedFilters.indexOf(this.afterSearch[i].text, 0);
          if (index > -1) {
            this.selectedFilters.splice(index, 1);
          }
        }
      }
    }
  }

  public showDataClick() {
    if (this.showData) {
      this.showData = false;
    } else {
      this.showData = true;
    }
  }
}

enum sections {
  Region = 'region',
  Area = 'area',
  Territory = 'territory',
}
