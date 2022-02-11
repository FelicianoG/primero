module.exports = mongoose => {
    var empSchema = mongoose.Schema({
                nombres: {type: String},
                apellidos: {type: String},
                edad:{type: Number},
                peliculas:{type: String},
                calidad: Number,
            },
            {timestamps : true}
        )


    empSchema.method("toJSON", function() {
        const { _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    
    
    const Empleado = mongoose.model("empleado", empSchema);
    return Empleado;

};