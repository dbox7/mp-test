import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";
import { ILocation, IEnv, IServer } from "./types";
import sample from "./data.json";

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
    const temp: number[] = [];
    const filteredServers:IServer[] = this.servers.filter((server:IServer) => {
      if (server.locationID === id) {
        temp.push(server.envID)
        return server;
      }
    });
    const filteredEnvs: IEnv[] = this.envs.filter((env: IEnv) => temp.includes(env.envID))
    return [filteredEnvs, filteredServers]
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const store = new Store();
export const storeContext = createContext(store);

