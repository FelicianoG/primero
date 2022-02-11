module.exports = mongoose =>{
    var dirSchema = mongoose.Schema(
            {
                calle: String,
                numero: String,
                colonia: String,
                edad: Number,
                cp: String,
                ciudad: String,
                estado: String,
                pais: String 
            },
            {timestamps : true}
        
    );


    dirSchema.method("toJSON", function() {
        const { _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Direccion = mongoose.model("direcciones", dirSchema);

    return Direccion;
};


