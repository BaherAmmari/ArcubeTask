const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.test' });

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  if (mongoose.connection.readyState !== 1) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Pause de 1 seconde
    if (mongoose.connection.readyState !== 1) {
      throw new Error('MongoDB connection is still not ready.');
    }
  }
  await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});
