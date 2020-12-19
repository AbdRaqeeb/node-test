import server from "../utils/server.js";

describe('Magic Endpoint', () => {
    it('should return lowest index for complete journey',  async () => {
        const req = {
            "magic": [3, 2, 5, 4],
            "dist": [2, 3, 4, 2]
        };

        const response = await server().post('/api/v1/magic').send(req);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('success', true);
        expect(response.body).toHaveProperty('lowestIndex', 3);
    });

    it('should return -1 for no solution', async () => {
        const req = {
            "magic": [3, 2, 5, 4],
            "dist": [2, 3, 4, 7]
        };

        const response = await server().post('/api/v1/magic').send(req);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('success', false);
        expect(response.body).toHaveProperty('lowestIndex', -1);
    });
});