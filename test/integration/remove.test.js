import server from "../utils/server.js";

describe('Remove Endpoint', () => {
    it('should delete item specified', async () => {
        const body = {
            "data": {
                "type": "durban",
                "crux": "indices",
                "color": "green",
                "title": "Indict the idiot"
            },
            "item": "type"
        };

        const response = await server().delete('/api/v1/remove').send(body);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('success', true);
        expect(response.body).toHaveProperty('data', {
            "crux": "indices",
            "color": "green",
            "title": "Indict the idiot"
        });
    });

    it('should return attribute not found', async () => {
        const body = {
            "data": {
                "type": "durban",
                "crux": "indices",
                "color": "green",
                "title": "Indict the idiot"
            },
            "item": "food"
        };

        const response = await server().delete('/api/v1/remove').send(body);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('success', false);
        expect(response.body).toHaveProperty('error', 'Attribute not found');
    });
});