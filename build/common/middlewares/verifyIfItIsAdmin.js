'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const roles_1 = __importDefault(require('../enums/roles'));
const verifyIfItIsAdmin = ({ context }) => {
  var _a;
  if (((_a = context.user) === null || _a === void 0 ? void 0 : _a.role) !== roles_1.default.ADMIN)
    throw new Error('You do not have permissions');
  return true;
};
exports.default = verifyIfItIsAdmin;
//# sourceMappingURL=verifyIfItIsAdmin.js.map
