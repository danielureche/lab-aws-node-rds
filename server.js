const app = require('./app');
const sequelize = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.sync();
        console.log('Sincronized DB 🚀');

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Error to start:', error);
    }
})();
