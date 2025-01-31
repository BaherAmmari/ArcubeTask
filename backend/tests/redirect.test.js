const request = require("supertest");
const app = require("../app");
const Url = require("../models/Url");

describe("GET /:shortId", () => {
    it("Should redirect to the original URL when shortId exists", async () => {
        const newUrl = new Url({
            longUrl: "https://example.com",
            shortId: "abc123",
        });
        await newUrl.save();

        const response = await request(app)
            .get("/abc123")
            .expect(302);

        expect(response.header.location).toBe("https://example.com");
    });

    it("Should return a 404 error if the URL does not exist", async () => {
        const response = await request(app)
            .get("/nonexistentId")
            .expect(404);

        expect(response.body).toHaveProperty("error", "URL not found");
    });

    it("Should return a 500 error in case of a server issue", async () => {
        jest.spyOn(Url, "findOne").mockImplementationOnce(() => {
            throw new Error("MongoDB error");
        });

        const response = await request(app)
            .get("/abc123")
            .expect(500);

        expect(response.body).toHaveProperty("error", "Server error");
    });
});
