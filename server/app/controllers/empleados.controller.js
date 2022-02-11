const db = require("../models");
const Empleado = db.empleados;

// Create and Save a new Empleado
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nombres) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Empleado
  const empleado = new Empleado({
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    edad: req.body.edad,
    titulado: req.body.titulado ? req.body.titulado : false
  });

  // Save Empleado in the database
  empleado.save()
    .then(data => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Empleado."
      });
    });
};

// Retrieve all Empleados from the database.
exports.findAll = (req, res) => {
  const nombres = req.query.nombres;
  var condition = nombres ? { title: { $regex: new RegExp(nombres), $options: "i" } } : {};

  Empleado.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Empleados."
      });
    });
};

// Find a single Empleado with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Empleado.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Empleado with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Empleado with id=" + id, err });
    });
};

// Update a Empleado by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.body.id;

  Empleado.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Empleado with id=${id}. Maybe Empleado was not found!`
        });
      } else res.send({ message: "Empleado was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Empleado with id=" + id, err
      });
    });
};

// Delete a Empleado with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Empleado.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Empleado with id=${id}. Maybe Empleado was not found!`
        });
      } else {
        res.send({
          message: "Empleado was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Empleado with id=" + id, err
      });
    });
};

// Delete all Empleados from the database.
exports.deleteAll = (req, res) => {
  Empleado.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Empleados were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Empleados."
      });
    });
};

// Find all published Empleados
exports.findAllTitulados = (req, res) => {
  Empleado.find({ titulados: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Empleados."
      });
    });
};