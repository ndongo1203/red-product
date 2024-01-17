const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Mongo connecté");
    } catch (err) {
        console.error("Erreur lors de la connexion à MongoDB :", err);
        process.exit(1); // Quitte le processus avec un code d'état non nul
    }
};

module.exports = connectDB
