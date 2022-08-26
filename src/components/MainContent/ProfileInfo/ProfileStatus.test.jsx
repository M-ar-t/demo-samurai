import React from "react";
import { create } from "react-test-renderer";
import ProfleStatus from "./ProfileStatus"

describe("Profile status component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfleStatus status = "it-kam.com" />);
    const instance = component.getInstance()
    expect(instance.state.status).toBe("it-kam.com");
  });
//   test("after creation span should be displayded", () => {
//     const component = create(<ProfleStatus status = "it-kam.com" />); 
//     const root = component.root
   
//     expect(() =>{
//     //    root.findByType("input")
//     }).toThrow()
//     })
  });