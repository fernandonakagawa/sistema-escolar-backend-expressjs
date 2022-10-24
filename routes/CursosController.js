const mysql = require("mysql");
const config = require("../middleware/config");

module.exports = {
  async index(request, response) {
    console.log(config);
    const connection = mysql.createConnection(config);
    connection.connect();
    connection.query("SELECT nome, descricao FROM Curso", function (
      err,
      rows,
      fields
    ) {
      if (err) throw err;
      console.log(rows);
      connection.end();
      return response.json(rows);
    });
  }
};
