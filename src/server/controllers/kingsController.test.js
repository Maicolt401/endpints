const { MongoMemoryServer } = "mongodb-memory-server";
const request = require("supertest");
const { app } = require("..");
const Kind = require("../../database/moduls/kingsSchema");
const { listKings, getKind } = require("./kingsController");

jest.mock("../../database/moduls/kingsSchema", () => ({
  ...jest.requireActual("../../database/moduls/kingsSchema"),
  find: jest.fn().mockResolvedValue(true),
}));

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
describe("Given a Kings Function", () => {
  describe("When it receive a response", () => {
    test("Then it should the method get whit status 200", async () => {
      await listKings(null, res);

      const expectedStatusCode = 200;

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});

describe("Given a get/listKind endpoint", () => {
  describe("When it receive a request", () => {
    test("the its should response with a 200 status code and list kind", async () => {
      const listFind = {
        id: 45,
        kind: "moraleja",
      };
      const { body } = await request(app).get("/listKind/").send().expect(200);

      const listKind = Kind.findById({ listFind });

      expect(body.kind).toHaveBeenCalledWith(listKind);
    });
  });
});

describe("Given a Kings Function", () => {
  describe("When it receive a response", () => {
    test("Then it should the method get whit status 200 ", async () => {
      const next = jest.fn();

      const req = {
        params: {
          id: 5,
        },
      };
      await getKind(req, res, next);

      const expectedStatusCode = 200;

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
