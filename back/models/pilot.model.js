module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            pilotId: String,
            firstName: String,
            lastName: String,
            phoneNumber: String,
            email: String,
            createdDt: String
        },
        {timestamps: true}
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("pilot", schema);
};