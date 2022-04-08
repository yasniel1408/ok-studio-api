'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const roles_1 = __importDefault(require('../enums/roles'));
const verifyIfItIsAUser = ({ context }) => {
  var _a, _b;
  if (
    ((_a = context.user) === null || _a === void 0 ? void 0 : _a.role) !== roles_1.default.USER &&
    ((_b = context.user) === null || _b === void 0 ? void 0 : _b.role) !== roles_1.default.ADMIN
  )
    throw new Error('You do not have permissions');
  return true;
};
exports.default = verifyIfItIsAUser;
//# sourceMappingURL=verifyIfItIsAUser.js.map
