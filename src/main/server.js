    require('dotenv').config();
    const express = require('express');
    const authRoutes = require('../interface/routes/authRoutes');
    const sequelize = require('../infra/database/sequelize');
    const UserModel = require('../infra/models/UserModel'); // agora o Sequelize conhece o model

    const app = express();
    app.use(express.json());
    app.use('/auth', authRoutes);

    sequelize.sync().then(() => {
        console.log('Auth DB ready!');
        
    });
    
    const PORT = process.env.PORT || 3008;
    app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));

  