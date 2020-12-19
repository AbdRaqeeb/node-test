import server from "../utils/server.js";

describe('Validation Endpoint', () => {
    it('should return valid', async () => {
        const body = {
            "data": {
                "type": "durban",
                "crux": "indices",
                "color": "green",
                "title": "Indict the idiot"
            },
            "rules": ["crux", "title", "type", "color"]
        };

        const response = await server().post('/api/v1/valid').send(body);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('success', true);
        expect(response.body).toHaveProperty('data', 'Valid');
    });

    it('should return missing items', async () => {
        const body = {
            "data": {
                "type": "durban",
                "crux": "indices",
            },
            "rules": ["crux", "title", "type", "color"]
        };

        const response = await server().post('/api/v1/valid').send(body);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('success', false);
        expect(response.body).toHaveProperty('msg', 'Item(s) missing');
        expect(response.body).toHaveProperty('items', ['title', 'color']);
    });
});