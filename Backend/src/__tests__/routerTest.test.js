import request from "supertest";
import app from "../app";

describe("Teste de Rota do gerenciador de Inventário", () => {
  it("Retorna erro 404 caso a rota acessada seja inválida!", async (done) => {
    const response = await request(app).get("/qualquer_rota");

    expect(response.status).toBe(404);
    expect(response.res.statusMessage).toEqual("Not Found");
    done();
  });

  it("Cria um produto", async () => {
    const response = await request(app).post("/products").set({
      name: "paper",
      amount: 500,
      unit: "fls",
    });

    expect(response.status).toBe(200);
    expect(response.res.data).toBeTruthy();
  });
});
