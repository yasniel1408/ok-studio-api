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
exports.objectResolver = exports.createObject = exports.findAllObject = void 0;
const verifyIfItIsAUser_1 = __importDefault(require('../common/middlewares/verifyIfItIsAUser'));
const findAllObject = (parent, args, context) => {
  return (
    (0, verifyIfItIsAUser_1.default)({ context }) &&
    context.orm.object.findMany({
      include: { images: true, type: true, users: true }
    })
  );
};
exports.findAllObject = findAllObject;
const createObject = (parent, args, context) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const data = args.input;
    const object =
      (0, verifyIfItIsAUser_1.default)({ context }) &&
      (yield context.orm.object.create({
        data
      }));
    return object;
  });
exports.createObject = createObject;
exports.objectResolver = {
  id: ({ id }) => id,
  name: ({ name }) => name,
  price: ({ price }) => price,
  description: ({ description }) => description,
  typeId: ({ typeId }) => typeId,
  category: ({ category }) => category,
  subcategory: ({ subcategory }) => subcategory,
  createdAt: ({ createdAt }) => createdAt,
  updatedAt: ({ updatedAt }) => updatedAt
};
exports.default = {
  Query: {
    findAllObject: exports.findAllObject
  },
  Mutation: {
    createObject: exports.createObject
  },
  Object: exports.objectResolver
};
//# sourceMappingURL=objectResolver.js.map
