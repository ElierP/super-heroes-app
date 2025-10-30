import request from "supertest";
import app from "../src/app";

describe("GET /api/heroes", () => {
  it("return a list of all heroes", async () => {
    const response = await request(app).get("/api/heroes");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should return a hero by ID", async () => {
    const response = await request(app).get("/api/heroes/1");
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("A-Bomb");
  });

   it("should return a hero by ID", async () => {
    const response = await request(app).get("/api/heroes/6");
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Absorbing Man");
  });
});