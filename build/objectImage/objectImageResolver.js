"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectImageResolver = exports.createObjectImage = exports.findAllObjectImage = void 0;
const verifyIfItIsAUser_1 = __importDefault(require("../common/middlewares/verifyIfItIsAUser"));
const findAllObjectImage = (parent, args, context) => {
    return ((0, verifyIfItIsAUser_1.default)({ context }) &&
        context.orm.objectImage.findMany({
            include: { object: true }
        }));
};
exports.findAllObjectImage = findAllObjectImage;
const createObjectImage = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const data = args.input;
    const objectImage = (0, verifyIfItIsAUser_1.default)({ context }) &&
        (yield context.orm.objectImage.create({
            data
        }));
    return objectImage;
});
exports.createObjectImage = createObjectImage;
exports.objectImageResolver = {
    id: ({ id }) => id,
    objectId: ({ objectId }) => objectId,
    url: ({ url }) => url,
    createdAt: ({ createdAt }) => createdAt,
    updatedAt: ({ updatedAt }) => updatedAt
};
exports.default = {
    Query: {
        findAllObjectImage: exports.findAllObjectImage
    },
    Mutation: {
        createObjectImage: exports.createObjectImage
    },
    ObjectImage: exports.objectImageResolver
};
//# sourceMappingURL=objectImageResolver.js.map