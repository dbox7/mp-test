export interface ILocation {
  locationID: number;
  name: string;
}

export interface IEnv {
  envID: number;
  name: string;
}

export interface IServer {
  serverID: number;
  name: string;
  locationID: number;
  envID: number;
}

export interface ICard {

}