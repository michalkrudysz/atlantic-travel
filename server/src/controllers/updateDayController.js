"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchDay = void 0;
const updateDayService = __importStar(require("../services/updateDayService"));
const patchDay = async (req, res) => {
    try {
        const { trip_id, day_number, description, new_day_number } = req.body;
        const updatedDay = await updateDayService.updateDay({
            trip_id,
            day_number,
            description,
            new_day_number,
        });
        res.json(updatedDay);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(404).send(error.message);
        }
        else {
            res.status(500).send("An unexpected error occurred");
        }
    }
};
exports.patchDay = patchDay;
