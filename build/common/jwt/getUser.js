'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
const getUser = ({ authorization }) => {
  try {
    const token = authorization.split(' ')[1];
    const res = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    return res.user;
  } catch (e) {
    return null;
  }
};
exports.default = getUser;
//# sourceMappingURL=getUser.js.map
