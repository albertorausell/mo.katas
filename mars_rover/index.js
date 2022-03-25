const express = require('express');
const swaggerUI = require("swagger-ui-express");
const roverRouter = require("./routes/rover");
const YAML = require('yamljs');

const app = express();
const port = process.env.PORT || 3452;

const swaggerDocument = YAML.load('./swagger.yaml');
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());

app.use("/rover", roverRouter);

app.listen(port ,
() => console.log(`Rover is on ready on ${port} -  Ctrl + C to Stop `) )
/*const Rover = require("./src/rover");
const Mars = require("./src/variables");
let rover = new Rover(0,0,'N');
rover.inspectArea();
Mars.obstacles = [[0,0]];*/