import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
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

  fetchData = async () => {
    await sleep(3000);
    runInAction(() => {
      this.locations = sample.locations;
      this.envs = sample.envs;
      this.servers = sample.servers;
      this.isLoaded = true;
    });
  };

  filter = (id: number) => {
    let filteredEnvs: any[] = [];
    const filteredServers = this.servers.filter(server => {
      if (server.locationID === id) {
        filteredEnvs.push(server.envID)
        return server;
      }
    });
    filteredEnvs = this.envs.filter(env => filteredEnvs.includes(env.envID))
    return [filteredEnvs, filteredServers]
  }

  constructor() {
    console.log('start')
    makeAutoObservable(this);
  }
}

export const store = new Store();
export const storeContext = createContext(store);

