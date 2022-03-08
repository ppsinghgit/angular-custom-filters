export class Dropdowndata {
  Value: string;
  Text: string;
  Flag: boolean;
  Type: string;
}

export class ShowSelectedFiltersCountBySection {
  StoreType: number = 0;
  ContractType: number = 0;
  Region: number = 0;
  Area: number = 0;
  Territory: number = 0;
  Chain: number = 0;
  EnrolledBy: number = 0;
  Distributor: number = 0;
  TotalCount: number = 0;
}
export class SelectedFilterItem {
  Value: string;
  Type: string;
}

export class FilterModel {
  public TotalFilterAppliedCount: number;
  public ProjectOid: number;
  public Status: number; // 0 for cancel, 1 for apply
  public Year: string;
  public TradeProgramName: string;
  public Term: string;
  public Regions: Dropdowndata[];
  public Areas: Dropdowndata[];
  public Territories: Dropdowndata[];
  public StoreTypes: Dropdowndata[];
  public ContractTypes: Dropdowndata[];
  public Distributors: Dropdowndata[];
  public Chains: Dropdowndata[];
  public EnrolledBys: Dropdowndata[];
  public Brokers: Dropdowndata[];
}
