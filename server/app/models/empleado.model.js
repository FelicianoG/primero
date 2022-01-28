module.exports = mongoose => {
    var schema = mongoose.Schema(
        "empleado",
        mongoose.Schema(
            {
                nombres: String,
                apellidos: String,
                edad: Number,
                peliculas: String,
                calidad: Number,
            },
            {timestamps : true}
        )
    );

    schema.method("toJSON", function() {
        const { _id, ...object} = this.object();
        object.id = _id;
        return object;
    });
    
    const Empleado = mongoose.model("empleado", schema);

    return Empleado;
};
