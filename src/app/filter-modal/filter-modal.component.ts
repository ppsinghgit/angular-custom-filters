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

  private enrollmentFilter = new EnrollmentFilter();
  selectedView: string;

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
    this.addText = 'test';
    this.selectedSection = val;
    if (val == sections.view) {
      this.addText = this.enrollmentFilter.view;
    } else if (val == sections.year) {
      this.addText = this.enrollmentFilter.year;
    } else if (val == sections.enrollmentYear) {
      this.addText = this.enrollmentFilter.enrollmentYear;
    } else if (val == sections.programName) {
      this.addText = this.enrollmentFilter.programName;
    } else if (val == sections.contractNumber) {
      this.addText = this.enrollmentFilter.contractNumber;
    } else if (val == sections.distrbutorName) {
      this.addText = this.enrollmentFilter.distrbutorName;
    } else if (val == sections.enrolledBy) {
      this.addText = this.enrollmentFilter.enrolledBy;
    } else if (val == sections.enrollmentId) {
      this.addText = this.enrollmentFilter.enrollmentId;
    } else if (val == sections.enrollmentStatus) {
      this.addText = this.enrollmentFilter.enrollmentStatus;
    } else if (val == sections.payToName) {
      this.addText = this.enrollmentFilter.payToName;
    } else if (val == sections.payToAddress) {
      this.addText = this.enrollmentFilter.payToAddress;
    } else if (val == sections.payToCity) {
      this.addText = this.enrollmentFilter.payToCity;
    } else if (val == sections.payToState) {
      this.addText = this.enrollmentFilter.payToState;
    } else if (val == sections.payToZip) {
      this.addText = this.enrollmentFilter.payToZip;
    }
  }

  addFilter() {
    if (this.selectedSection == sections.view) {
      this.enrollmentFilter.view = this.addText;
    } else if (this.selectedSection == sections.year) {
      this.enrollmentFilter.year = this.addText;
    } else if (this.selectedSection == sections.enrollmentYear) {
      this.enrollmentFilter.enrollmentYear = this.addText;
    } else if (this.selectedSection == sections.programName) {
      this.enrollmentFilter.programName = this.addText;
    } else if (this.selectedSection == sections.contractNumber) {
      this.enrollmentFilter.contractNumber = this.addText;
    } else if (this.selectedSection == sections.distrbutorName) {
      this.enrollmentFilter.distrbutorName = this.addText;
    } else if (this.selectedSection == sections.enrolledBy) {
      this.enrollmentFilter.enrolledBy = this.addText;
    } else if (this.selectedSection == sections.enrollmentId) {
      this.enrollmentFilter.enrollmentId = this.addText;
    } else if (this.selectedSection == sections.enrollmentStatus) {
      this.enrollmentFilter.enrollmentStatus = this.addText;
    } else if (this.selectedSection == sections.payToName) {
      this.enrollmentFilter.payToName = this.addText;
    } else if (this.selectedSection == sections.payToAddress) {
      this.enrollmentFilter.payToAddress = this.addText;
    } else if (this.selectedSection == sections.payToCity) {
      this.enrollmentFilter.payToCity = this.addText;
    } else if (this.selectedSection == sections.payToState) {
      this.enrollmentFilter.payToState = this.addText;
    } else if (this.selectedSection == sections.payToZip) {
      this.enrollmentFilter.payToZip = this.addText;
    }
    let item = new SelectedFilterItem();
    item.Value = this.selectedSection + ' - ' + this.addText;
    item.Type = this.selectedSection;
    this.selectedFilters.push(item);
    this.addText = '';
    this.setFiltersCount();
    console.log('test');
  }

  private setPrimaryData(data: Dropdowndata[]) {
    this.primaryDdlData = data;
    this.getPrimaryDataHeight();
  }

  public validate() {}

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

export class EnrollmentFilter {
  view: string;
  year: string;
  enrollmentYear: string;
  programName: string;
  contractNumber: string;
  distrbutorName: string;
  enrolledBy: string;
  enrollmentId: string;
  enrollmentStatus: string;
  payToName: string;
  payToAddress: string;
  payToCity: string;
  payToState: string;
  payToZip: string;
}
