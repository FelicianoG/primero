module.exports = mongoose =>{
    var dirSchema = mongoose.Schema(
            {
                nombre: String,
                codigo: Number,
                peso: Number,
                
            },
            {timestamps : true}
        
    );


    dirSchema.method("toJSON", function() {
        const { _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });

    const Producto = mongoose.model("productos", dirSchema);

    return Producto;
};


