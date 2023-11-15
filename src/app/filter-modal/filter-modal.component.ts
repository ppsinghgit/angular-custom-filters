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
  // public afterSearch: Dropdowndata[];
  // public itemSearched: string;
  public selectedSection: string = 'none';
  public showData: boolean = false;
  public primaryDataHeight: number;

  public selectedFilters: SelectedFilterItem[];
  public filtersCount: ShowSelectedFiltersCountBySection =
    new ShowSelectedFiltersCountBySection();
  public closeResult: string;
  public addText: string = '';

  @Input() public filterModel: FilterModel;

  public filterModelInCaseCancel: FilterModel;
  public selectedSectionType: string = '';

  constructor(public activeModal: NgbActiveModal) {
    this.selectedFilters = [];
  }

  ngOnInit() {
    this.initiate();
  }

  initiate() {
    this.filterModelInCaseCancel = JSON.parse(JSON.stringify(this.filterModel));
    this.primaryDdlData = [];
  }

  selectField(type: string) {}

  changeSelection(val: string) {
    this.selectedSection = val;
    if (val == sections.view) {
    }
  }

  addFilter() {
    let item = new SelectedFilterItem();
    item.Value = this.selectedSection + ' - ' + this.addText;
    item.Type = this.selectedSection;
    this.selectedFilters.push(item);
    this.addText = '';
    this.setFiltersCount();
  }

  private setPrimaryData(data: Dropdowndata[]) {
    this.primaryDdlData = data;
    this.getPrimaryDataHeight();
  }

  public validate() {
  }

  onSearchChange(searchValue: string): void {
    this.getPrimaryDataHeight();
  }

  public checkBoxEvent(selected: boolean, value: string) {
    this.setFiltersCount();
  }

  public radioButtonEvent(selected: boolean, value: string) {
    let item: any = null;
  
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
    this.filtersCount.TotalCount = this.selectedFilters?.length;
  }

  public removeSingleFilter(type: string, value: string) {
    let item: Dropdowndata;
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
  view = 'view',
  year = 'year',
  enrollmentYear = 'enrollmentYear',
  programName = 'programName',
  contractNumber = 'contractNumber',
  distrbutorName = 'distributorName',
  enrolledBy = 'enrolledBy',
  enrollmentId = 'enrollmentId',
  enrollmentStatus = 'enrollmentStatus',
  payToName = 'payToName',
  payToAddress = 'payToAddress',
  payToCity = 'payToCity',
  payToState = 'payToState',
  payToZip = 'payToZip',
}

enum sectionType {
  SalesHierarchy = 'SalesHierarchy',
  AccountHierarchy = 'AccountHierarchy',
  RetailerAccounts = 'RetailerAccounts',
}
