module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 8]
            }
        },
        city: {
            type: DataTypes.STRING,
            defaultValue: "Atlanta",
            allowNull : false
        },
        zipCode: {
            type: DataTypes.INTEGER,
            defaultValue: 30328
        }
    });
    return User;
};
