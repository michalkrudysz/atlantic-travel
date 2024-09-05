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
exports.TripDays = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const trips_1 = require("./trips");
let TripDays = class TripDays extends sequelize_typescript_1.Model {
};
exports.TripDays = TripDays;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], TripDays.prototype, "day_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => trips_1.Trips),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], TripDays.prototype, "trip_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
    }),
    __metadata("design:type", String)
], TripDays.prototype, "day_number", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
    }),
    __metadata("design:type", String)
], TripDays.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => trips_1.Trips),
    __metadata("design:type", trips_1.Trips)
], TripDays.prototype, "trip", void 0);
exports.TripDays = TripDays = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "tripdays",
        timestamps: false,
    })
], TripDays);
