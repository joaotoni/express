const { DataTypes } = require("sequeliza");

const db = require("../database");

const Reserva_filme = db.define(
    "Reserva_filme",
    {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        reserva_codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        data_devolucao : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantidade: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        filme_codigo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
    },
    {tableName:"reserva_filme",timestamps: false},
);
module.exports = Reserva_filme;