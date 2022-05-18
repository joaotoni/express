const { DataTypes } = require("sequeliza");

const db = require("../database");

const Endereco = db.define(
    "Endereco",
    {
        codigo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        logadouro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cep: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cliente_codigo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
    },
    {tableName: "endereco",timestamps: false}
);

module.exports = Endereco;
