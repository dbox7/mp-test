export interface ILocation {
  locationID: number;
  name: string;
  [propName: string]: any;
}

export interface IEnv {
  envID: number;
  name: string;
  [propName: string]: any;
}

export interface IServer {
  serverID: number;
  name: string;
  locationID: number;
  envID: number;
}

export interface ICard {
  locationID: number,
  envID: number,
  hint: string,
  [propName: string]: any;
}

export interface cardOptions {
  idx: number,
  location: ICard,
  handle: any,
  updateLocationsList: any
}

export interface option {
  options: Partial<ILocation & IEnv>[],
  location: ICard,
  handle: Function,
  filter: Function,
}

export type updateValue = string | number
