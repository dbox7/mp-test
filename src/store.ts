import { makeAutoObservable, runInAction } from "mobx";
import React, { createContext } from "react";
import sample from "./data.json";
import { ILocation, IEnv, IServer, ICard } from "./types";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Store {
  isLoaded: boolean = false;
  locations: ILocation[] = [];
  envs: IEnv[] = [];
  servers: IServer[] = [];
  locationList: ICard[] = [];

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
    console.log('start')
    makeAutoObservable(this);
    //this.fetchData();
  }

  

  // filterEnvs = (location: string) => {
  //   return this.envs.filter(item => {
  //     this.servers.forEach(server => {
        
  //     })
  //   })
  // }
}

export const store = new Store();
export const storeContext = createContext(store);

