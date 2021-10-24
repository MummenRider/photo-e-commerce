import { renderHook, act } from "@testing-library/react-hooks";
import { cleanup } from "@testing-library/react";
import { useWindowSize } from "Hooks/useWindowSize";
afterEach(cleanup);

window.resizeTo = function resizeTo(width, height) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height,
  }).dispatchEvent(new this.Event("resize"));
};
describe("<useWindowSize />", () => {
  it("should have a value of undefined initially", () => {
    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(undefined);
    expect(result.current.height).toBe(undefined);
  });

  //Note: There was an existing bug about the act warning.
  //For more info: https://github.com/testing-library/react-testing-library/issues/463
  it("should return new values on window resize", async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      window.resizeTo(500, 500);
    });
    jest.advanceTimersByTime(1000);

    expect(await result.current.width).toBe(500);
    expect(await result.current.height).toBe(500);
  });
});
