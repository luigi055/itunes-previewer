import crypto from "crypto";

export class Random {
  private static startPositionSubstring = 2;
  private static endPositionSubstring = 15;

  private static randomFloat() {
    const randomInt = crypto.randomBytes(1).toJSON().data[0];
    return randomInt / 2 ** 32;
  }

  private static generateRandomString() {
    return this.randomFloat()
      .toString()
      .substring(this.startPositionSubstring, this.endPositionSubstring);
  }

  public static getString(): string {
    return this.generateRandomString() + this.generateRandomString();
  }
}
