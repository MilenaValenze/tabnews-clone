function status(request, response) {
  response
    .status(200)
    .json({ chave: "Em breve, página com informações sobre o site." });
}

export default status;
