import { div } from "./div";

describe("div", () => {
  it(" el resultado de la división es 5", () => {
    expect(div(10, 2)).toBe(5);
  });
  it("el resultado de la división es 6.25 ", () => {
    expect(div(25, 4)).toBe(6.25);
  });
  it("el resultado de la división es 0", () => {
    expect(div(0, 5)).toBe(0);  });

  it("si la división es con cero es indefinida o infinity", () => {
    expect(div(5, 0)).toBe(Infinity); // uso infinity para determinar que dividir por cero es una operacion indefinidad en las matematicas
  });
  
  
});
