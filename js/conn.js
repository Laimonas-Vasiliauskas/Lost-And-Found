const sql = require('mssql');

const config = {
    user: 'AGPSadmin',
    password: 'Vilnius123+',
    server: 'agpsserver.database.windows.net',
    database: 'AGPStestDB',
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: false
    }
};

async function testConnection() {
    try {
        await sql.connect(config);

        const result = await sql.query`SELECT 1 AS test`;
        console.log("DB atsakymas:", result.recordset);

    } catch (err) {
        console.error("Klaida:", err);
    }
}

testConnection();