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

  public filterModelInCaseCancel: FilterModel;

  constructor(public activeModal: NgbActiveModal) {
    this.selectedFilters = [];
  }

  ngOnInit() {
    this.initiate();
  }

  initiate() {
    this.filterModelInCaseCancel = JSON.parse(JSON.stringify(this.filterModel));
    this.regions = this.filterModel.regions;
    this.areas = this.filterModel.areas;
    this.territories = this.filterModel.territories;
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

  public ApplyFilter() {
    this.filterModel.status = 1;
    this.activeModal.close(this.filterModel);
  }

  public cancel() {
    this.activeModal.close(this.filterModelInCaseCancel);
  }
}

enum sections {
  Region = 'region',
  Area = 'area',
  Territory = 'territory',
}
