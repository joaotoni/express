const { DataTypes } = require("sequeliza");

const db = require("../database");

const Filme_genero = db.define(
    "Filme_genero",
    {
        filme_codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        genero_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    },
    {tableName: "filme_genero",timestamps: false}
);

module.exports = Filme_genero;
