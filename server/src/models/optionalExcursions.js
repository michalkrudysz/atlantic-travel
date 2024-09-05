"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalExcursions = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const trips_1 = require("./trips");
let OptionalExcursions = class OptionalExcursions extends sequelize_typescript_1.Model {
};
exports.OptionalExcursions = OptionalExcursions;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], OptionalExcursions.prototype, "optional_excursion_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => trips_1.Trips),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], OptionalExcursions.prototype, "trip_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], OptionalExcursions.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => trips_1.Trips),
    __metadata("design:type", trips_1.Trips)
], OptionalExcursions.prototype, "trip", void 0);
exports.OptionalExcursions = OptionalExcursions = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "optionalexcursions",
        timestamps: false,
    })
], OptionalExcursions);
