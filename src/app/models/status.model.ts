export interface StatusModel {
  name: string;
  type: string;
  modelid: string;
  swversion: string;
  range: string;
  Runtime: number;
  rssi: number;
  otacheck: boolean;
  wifilog: boolean;
  free_memory: number;
  WifiVersion: string;
  ProductId: string;
  DeviceId: string;
  StatusType: string;
  ConnectType: string;
  om: string;
  pwr: string;
  cl: boolean;
  aqil: number;
  uil: string;
  dt: number;
  dtrs: number;
  mode: string;
  pm25: number;
  iaql: number;
  aqit: number;
  aqit_ext: number;
  ddp: string;
  err: number;
  fltt1: string;
  fltt2: string;
  fltsts0: number;
  fltsts1: number;
  fltsts2: number;
  timestamp: string; // or Date
}

export const defaultStatusModel: StatusModel = {
  name: '',
  type: '',
  modelid: '',
  swversion: '',
  range: '',
  Runtime: 0,
  rssi: 0,
  otacheck: false,
  wifilog: false,
  free_memory: 0,
  WifiVersion: '',
  ProductId: '',
  DeviceId: '',
  StatusType: '',
  ConnectType: '',
  om: '',
  pwr: '',
  cl: false,
  aqil: 0,
  uil: '',
  dt: 0,
  dtrs: 0,
  mode: '',
  pm25: 0,
  iaql: 0,
  aqit: 0,
  aqit_ext: 0,
  ddp: '',
  err: 0,
  fltt1: '',
  fltt2: '',
  fltsts0: 0,
  fltsts1: 0,
  fltsts2: 0,
  timestamp: ''
};
