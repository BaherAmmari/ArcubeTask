const request = require("supertest");
const app = require("../app");
const Url = require("../models/Url");

describe("POST /shorten", () => {
    it("Should shorten a valid URL", async () => {
        const response = await request(app)
            .post("/shorten")
            .send({ longUrl: "https://example.com" })
            .expect(200);

        expect(response.body).toHaveProperty("shortUrl");
        expect(response.body.shortUrl).toMatch(/http:\/\/127.0.0.1:\d+\/\w+/);
    });

    it("Should return the same shortened URL if it already exists", async () => {
        const existingUrl = new Url({ longUrl: "https://example.com", shortId: "test123" });
        await existingUrl.save();

        const response = await request(app)
            .post("/shorten")
            .send({ longUrl: "https://example.com" })
            .expect(200);

        expect(response.body.shortUrl).toContain("/test123");
    });

    it("Should return a 400 error for an invalid URL", async () => {
        const response = await request(app)
            .post("/shorten")
            .send({ longUrl: "invalid-url" })
            .expect(400);

        expect(response.body).toHaveProperty("error", "URL invalide");
    });

    it("Should return a 500 error in case of server issue", async () => {
        jest.spyOn(Url, "findOne").mockImplementationOnce(() => {
            throw new Error("MongoDB error");
        });

        const response = await request(app)
            .get("/abc123")
            .expect(500);

        expect(response.body).toHaveProperty("error", "Server error");
    });

});
