const express = require('express');
const app = express();

describe('GET /', ()=>{
    it('responds with Hello from Branch Based CI', async()=>{
           const res = await request(app).get('/');
           expect(res.statusCode).toBe(200);
           expet(res.text).toBe("Hello from Branch Based CI") 
    }
)})