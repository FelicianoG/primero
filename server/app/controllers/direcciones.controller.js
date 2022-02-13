
const db = require("../models");
const Direccion = db.direcciones;

// Create and Save a new Direccion
exports.create = (req, res) => {

  // Validate request
  if (!req.body.calle) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  
  // Create Direccion
  const direccion = new Direccion({
    calle :req.body.calle,
    numero :req.body.numero,
    colonia : req.body.colonia,
    cp : req.body.cp,
    ciudad : req.body.ciudad,
    estado : req.body.estado,
    pais : req.body.pais,
  });
  // // Save Direccion in the database
  direccion.save()
    .then(data => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Direccion."
      });
    });
};

// Retrieve all Direcciones from the database.
exports.findAll = (req, res) => {
  const calles = req.query.calle;
  var condition = calles ? { title: { $regex: new RegExp(calles), $options: "i" } } : {};

  Direccion.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Direccion."
      });
    });
};

// Find a single Direccion with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Direccion.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Empleado with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Direccion with id=" + id, err });
    });
};

// Update a Direccion by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Direccion.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Direccion with id=${id}. Maybe Direccion was not found!`
        });
      } else res.send({ message: "Direccion was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Direccion with id=" + id, err
      });
    });
};

// Delete a Direccion with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Direccion.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Direccion with id=${id}. Maybe Direccion was not found!`
        });
      } else {
        res.send({
          message: "Direccion was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Direccion with id=" + id, err
      });
    });
};

// Delete all Direcciones from the database.
exports.deleteAll = (req, res) => {
  Direccion.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Direcciones were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Direcciones."
      });
    });
};
