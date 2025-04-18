import { Query } from "pg";
import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1+1 as sum;");
  console.log(result.rows);
  response
    .status(200)
    .json({ chave: "Em breve, página com informações sobre o site." });
}

export default status;
