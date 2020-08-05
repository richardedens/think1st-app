import * as routes from "../src/routes";
import { expect } from "chai";
import "mocha";

describe("Router should be of type object", () => {

  it("Return of routes should be of type IRouter", () => {
    expect(routes).to.be.an("Object");
  });

});