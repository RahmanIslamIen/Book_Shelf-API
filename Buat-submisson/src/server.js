// import mudule framework hapi dan nanoid
const Hapi = require("@hapi/hapi");
const semuaRoute = require("./routes");

const init = async () => {
  const server = Hapi.server({
    // port buat jalan
    port: 9000,
    host: "localhost",
  });

  // iplementasikan route
  server.route(semuaRoute);

  await server.start();
  console.log("SERVER sedang berjalan pada %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
