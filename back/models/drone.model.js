module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            serialNumber: String,
            model: String,
            manufacturer: String,
            mac: String,
            ipv4: String,
            ipv6: String,
            firmware: String,
            positionX: Number,
            positionY: Number,
            altitude: Number
        },
        {timestamps: true}
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("drone", schema);
};