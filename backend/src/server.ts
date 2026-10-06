import { app } from "./app";
import { sequelize } from "./config/database";
import { env } from "./config/env";
import { defineAssociations } from "./models/associations";

// Importamos los modelos para que Sequelize los registre.
import "./modules/bicycles/bicycle.model";
import "./modules/brands/brand.model"
import "./modules/bicycles-details/bicycle-detail.model";
import "./modules/customers/customer.model";
import "./modules/orders/order.model";

async function startServer() {
  try {

    await defineAssociations();

    await sequelize.authenticate();

    console.log("MySql connection has been established successfully.");

    await sequelize.sync({ force: true }).then(() => {
      console.log("Database & tables created!");
    });

    //console.log("Modelos sincronizados.");

    app.listen(env.PORT, () => {
      console.log(
        `Server is running at http://localhost:${env.PORT}`
      );
    });

  } catch (error) {

    console.error(
      "Cannot connect to the database or start the server:",
      error
    );

    process.exit(1);
  }
}

startServer();