'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.typeResolver = exports.createType = exports.findAllTypes = void 0;
const verifyIfItIsAdmin_1 = __importDefault(require('../common/middlewares/verifyIfItIsAdmin'));
const findAllTypes = (parent, args, context) => {
  return (
    (0, verifyIfItIsAdmin_1.default)({ context }) &&
    context.orm.type.findMany({
      include: { objects: true, contracts: true, sample_images: true }
    })
  );
};
exports.findAllTypes = findAllTypes;
const createType = (parent, args, context) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const data = args.input;
    const user =
      (0, verifyIfItIsAdmin_1.default)({ context }) &&
      (yield context.orm.type.create({
        data
      }));
    return user;
  });
exports.createType = createType;
exports.typeResolver = {
  id: ({ id }) => id,
  name: ({ name }) => name,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
};
exports.default = {
  Query: {
    findAllTypes: exports.findAllTypes
  },
  Mutation: {
    createType: exports.createType
  },
  Type: exports.typeResolver
};
//# sourceMappingURL=typeResolver.js.map
