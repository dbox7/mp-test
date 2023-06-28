import { makeAutoObservable, runInAction } from "mobx";

import { createContext } from "react";
import sample from "./data.json";
import { ILocation, IEnv, IServer } from "./types";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Store {
  isLoaded = false;
  locations: ILocation[] = [];
  envs: IEnv[] = [];
  servers: IServer[] = [];

  fetchData = async () => {
    await sleep(3000);
    runInAction(() => {
      this.locations = sample.locations;
      this.envs = sample.envs;
      this.servers = sample.servers;
      this.isLoaded = true;
    });
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new Store();
export const storeContext = createContext(store);

