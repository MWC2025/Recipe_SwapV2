// 1. Load environment variables
// 2. Import the app
// 3. Read the port, with a fallback
// 4. Start the server

const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Recipe Swap running at: http://localhost:${PORT}`)
});