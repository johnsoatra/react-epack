import type { Config } from "./types";

let config: Config | undefined;

export function getConfig() {
  return config;
}

export function setConfig(_config: Config) {
  config = _config;
}
