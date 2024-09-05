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
exports.Trips = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const tripImages_1 = require("./tripImages");
const tripDays_1 = require("./tripDays");
const includedExcursions_1 = require("./includedExcursions");
const optionalExcursions_1 = require("./optionalExcursions");
const services_1 = require("./services");
const tripContacts_1 = require("./tripContacts");
let Trips = class Trips extends sequelize_typescript_1.Model {
};
exports.Trips = Trips;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER.UNSIGNED),
    __metadata("design:type", Number)
], Trips.prototype, "trip_id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(255)),
    __metadata("design:type", String)
], Trips.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Trips.prototype, "start_date", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Trips.prototype, "end_date", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(0),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], Trips.prototype, "price_per_person", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(0),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DECIMAL(10, 2)),
    __metadata("design:type", Number)
], Trips.prototype, "additional_costs", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], Trips.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(0),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Trips.prototype, "priority", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => tripImages_1.TripImages),
    __metadata("design:type", tripImages_1.TripImages)
], Trips.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => tripDays_1.TripDays),
    __metadata("design:type", Array)
], Trips.prototype, "tripDays", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => includedExcursions_1.IncludedExcursions),
    __metadata("design:type", Array)
], Trips.prototype, "includedExcursions", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => optionalExcursions_1.OptionalExcursions),
    __metadata("design:type", Array)
], Trips.prototype, "optionalExcursions", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => services_1.Services),
    __metadata("design:type", Array)
], Trips.prototype, "services", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => tripContacts_1.TripContacts),
    __metadata("design:type", Array)
], Trips.prototype, "tripContacts", void 0);
exports.Trips = Trips = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "trips",
        timestamps: false,
    })
], Trips);
