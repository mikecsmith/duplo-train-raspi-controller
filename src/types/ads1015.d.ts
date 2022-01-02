declare module "ads1015" {
  declare function _exports(
    bus: import("i2c-bus").PromisifiedBus,
    addr?: number,
    delay?: number,
    shift?: number
  ): {
    gain: number;
    _delay: number;
    _shift: number;
    writeLowThreshold: (threshold: number) => Promise<number>;
    writeHiThreshold: (threshold: number) => Promise<number>;
    measure: (mux: string) => Promise<number>;
  };
  declare namespace _exports {
    function open(
      busNum: number | string,
      addr?: number,
      provider?: string
    ): typeof _exports;
  }
  export = _exports;
}
