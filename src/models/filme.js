const { DataTypes } = require("sequeliza");

const db = require("../database");

const Filme = db.define(
    "Filme",
    {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ano_lancamento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duracao: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estoque: {
            type: DataTypes.INTEGER,
            allowNull:false,
        }
    },
    {tableName: "filme",timestamps: false}
);

module.exports = Filme;
