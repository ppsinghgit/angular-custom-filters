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
    this.primaryDdlData = [];
    this.afterSearch = [];
    this.itemSearched = '';
  }

  public OnRegionClick() {
    this.selectedSection = sections.Region;
    this.setPrimaryData(this.filterModel.Regions);
  }

  public OnAreaClick() {
    this.selectedSection = sections.Area;
    this.setPrimaryData(this.filterModel.Areas);
  }

  public OnTerritoryClick() {
    this.selectedSection = sections.Territory;
    this.setPrimaryData(this.filterModel.Territories);
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
      x.Value.toLowerCase().includes(searchValue.toLowerCase())
    );
    this.getPrimaryDataHeight();
  }

  public checkBoxEvent(selected: boolean, value: string) {
    selected = selected ? false : true;
    for (let i = 0; i < this.afterSearch.length; i++) {
      if (this.afterSearch[i].Value == value) {
        this.afterSearch[i].Flag = selected;
        if (this.afterSearch[i].Flag) {
          let item = new SelectedFilterItem();
          item.Value = this.afterSearch[i].Text;
          item.Type = this.selectedSection;

          this.selectedFilters.push(item);
        } else {
          let index = this.selectedFilters.findIndex(
            (x) =>
              x.Value == this.afterSearch[i].Text &&
              x.Type == this.selectedSection
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
      if (this.afterSearch[i].Value == value) {
        this.afterSearch[i].Flag = selected;
        item = new SelectedFilterItem();
        item.Value = this.afterSearch[i].Text;
        item.Type = this.selectedSection;
        this.selectedFilters.push(item);
      } else {
        this.afterSearch[i].Flag = false;
        let index = this.selectedFilters.findIndex(
          (x) =>
            x.Value == this.afterSearch[i].Text &&
            x.Type == this.selectedSection
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
    this.filtersCount.Region = 0;
    this.filtersCount.Area = 0;
    this.filtersCount.Territory = 0;
    this.filtersCount.TotalCount = 0;
    this.initiate();
  }

  public onApply() {
    // for (let i = 0; i < this.afterSearch.length; i++) {
    //   this.afterSearch[i].Flag = true;
    //   this.selectedFilters.push(this.afterSearch[i].Text);
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
    this.filtersCount.Region = this.filterModel.Regions.filter(
      (x) => x.Flag == true
    ).length;
    this.filtersCount.Area = this.filterModel.Areas.filter(
      (x) => x.Flag == true
    ).length;
    this.filtersCount.Territory = this.filterModel.Territories.filter(
      (x) => x.Flag == true
    ).length;

    this.filtersCount.TotalCount =
      this.filtersCount.Region +
      this.filtersCount.Area +
      this.filtersCount.Territory;
  }

  public removeSingleFilter(type: string, value: string) {
    let item: Dropdowndata;
    if (type == sections.Region) {
      this.filterModel.Regions.find((x) => x.Value == value).Flag = false;
    } else if (type == sections.Area) {
      this.filterModel.Areas.find((x) => x.Value == value).Flag = false;
    } else if (type == sections.Territory) {
      this.filterModel.Territories.find((x) => x.Value == value).Flag = false;
    }
    let index = this.selectedFilters.findIndex(
      (x) => x.Type == type && x.Value == value
    );
    if (index > -1) {
      this.selectedFilters.splice(index, 1);
    }
    this.setFiltersCount();
  }

  public ApplyFilter() {
    this.filterModel.Status = 1;
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
