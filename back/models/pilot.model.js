module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            pilotId: String,
            firstName: String,
            lastName: String,
            phoneNumber: String,
            email: String,
            createdDt: String,
            closestDistance: Number,
            lastSeen: Date
        },
        {timestamps: true}
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    schema.index({ createdAt: 1 }, { expireAfterSeconds: 600 })

    return mongoose.model("pilot", schema);
};