'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.objectTypeDefs = exports.objectResolver = void 0;
const objectResolver_1 = __importDefault(require('./objectResolver'));
exports.objectResolver = objectResolver_1.default;
const objectTypeDefs_1 = require('./objectTypeDefs');
Object.defineProperty(exports, 'objectTypeDefs', {
  enumerable: true,
  get: function () {
    return objectTypeDefs_1.objectTypeDefs;
  }
});
//# sourceMappingURL=index.js.map
