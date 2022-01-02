import ADS1015 from "ads1015";
import i2c from "i2c-bus";
import { sleep } from "./utilities/sleep";

async function readPotentiometer() {
  const bus = await i2c.openPromisified(1);
  const ads1015 = await ADS1015(bus);
  ads1015.gain = 1;

  bus.i2cWrite;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const value = await ads1015.measure("0+GND");
    console.log((value * 2) / 1000);
    await sleep(50);
  }
}

readPotentiometer();
