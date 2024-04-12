import { Sequelize } from "sequelize";

export default new Sequelize({
    dialect: "postgres",
    host: "127.0.0.1",
    port: 5432,
    database: "TRAINNING",
    username: "postgres",
    password: "#"
})