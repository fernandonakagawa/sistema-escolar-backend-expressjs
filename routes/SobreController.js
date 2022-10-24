module.exports = {
  async index(request, response) {
    //response.render("index", { title: "Express" });
    return response.json("{'pagina':'Sobre'}");
  }
};
