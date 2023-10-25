"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WobbleSpeed = void 0;
const tsparticles_engine_1 = require("tsparticles-engine");
class WobbleSpeed {
    constructor() {
        this.angle = 50;
        this.move = 10;
    }
    load(data) {
        if (!data) {
            return;
        }
        if (data.angle !== undefined) {
            this.angle = (0, tsparticles_engine_1.setRangeValue)(data.angle);
        }
        if (data.move !== undefined) {
            this.move = (0, tsparticles_engine_1.setRangeValue)(data.move);
        }
    }
}
exports.WobbleSpeed = WobbleSpeed;
