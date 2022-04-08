'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.appointmentTypeDefs = exports.appointmentResolver = void 0;
const appointmentResolver_1 = __importDefault(require('./appointmentResolver'));
exports.appointmentResolver = appointmentResolver_1.default;
const appointmentTypeDefs_1 = require('./appointmentTypeDefs');
Object.defineProperty(exports, 'appointmentTypeDefs', {
  enumerable: true,
  get: function () {
    return appointmentTypeDefs_1.appointmentTypeDefs;
  }
});
//# sourceMappingURL=index.js.map
