import request from "supertest";
import app from "../app";

describe("Teste de Rota do gerenciador de Inventário", function () {
  it("Retorna erro 404 caso a rota acessada seja inválida!", async (done) => {
    const response = await request(app).get("/qualquer_rota");

    expect(response.status).toBe(404);
    expect(response.res.statusMessage).toEqual("Not Found");
    done();
  });

  it("Deve retornar status 500 quando não conseguir buscar os produtos", async (done) => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(500);
    done();
  });
});
