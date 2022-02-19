const db = require("../models");
const Producto = db.productos;

// Create and Save a new Producto
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Producto
  const producto = new Producto({
    nombre: req.body.nombre,
    codigo: req.body.codigo,
    peso: req.body.peso,
  });

  // Save Producto in the database
  producto.save()
    .then(data => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Producto."
      });
    });
};

// Retrieve all Productos from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { title: { $regex: new RegExp(nombre), $options: "i" } } : {};

Producto.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Productos."
      });
    });
};

// Find a single Producto with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Producto.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Producto with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Producto with id=" + id, err });
    });
};

// Update a Producto by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.body.id;

  Producto.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Producto with id=${id}. Maybe Producto was not found!`
        });
      } else res.send({ message: "Producto was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Producto with id=" + id, err
      });
    });
};

// Delete a Producto with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Producto.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Producto with id=${id}. Maybe Producto was not found!`
        });
      } else {
        res.send({
          message: "Producto was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Producto with id=" + id, err
      });
    });
};

// Delete all Productos from the database.
exports.deleteAll = (req, res) => {
  Producto.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Productos were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Productos."
      });
    });
};

// Find all published Productos
exports.findAllTitulados = (req, res) => {
  Producto.find({ titulados: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Productos."
      });
    });
};