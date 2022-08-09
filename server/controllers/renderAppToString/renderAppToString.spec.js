import renderAppToString from "./renderAppToString.js";

let sentHtml;
const mockRes = {
  send: (html) => {
    sentHtml = html;
  },
};

describe("When renderAppToString is called", () => {
  beforeAll(() => {
    renderAppToString({}, mockRes);
  });

  it("should return html string", () => {
    expect(sentHtml).toBe("<h1>Hello, world!</h1>");
  });
});
