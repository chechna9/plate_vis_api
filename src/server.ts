import express, { Request, Response, Application } from "express";
import { rootRoute } from "./routes/root_route";
import { connectToDatabase } from "./database/connection";
import generateTestData from "./services/generate_test_data";
import { carRouter } from "./routes/car_route";
import { historyRouter } from "./routes/history_route";
import { personRouter } from "./routes/person_route";

const app: Application = express();
const PORT = process.env.PORT || 3777;

app.use(express.json());

// Connect to local MongoDB and create test data
connectToDatabase().then(async () => {
  await generateTestData();

  // Use routes after creating test data
  app.use("/", rootRoute);
  app.use("/cars", carRouter);
  app.use("/history", historyRouter);
  app.use("/persons", personRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
