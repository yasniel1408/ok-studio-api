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
exports.sampleImageResolver = exports.createSampleImage = exports.findAllSampleImage = void 0;
const verifyIfItIsAUser_1 = __importDefault(require("../common/middlewares/verifyIfItIsAUser"));
const findAllSampleImage = (parent, args, context) => {
    return ((0, verifyIfItIsAUser_1.default)({ context }) &&
        context.orm.sampleImage.findMany({
            include: { type: true }
        }));
};
exports.findAllSampleImage = findAllSampleImage;
const createSampleImage = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const data = args.input;
    const sampleImage = (0, verifyIfItIsAUser_1.default)({ context }) &&
        (yield context.orm.sampleImage.create({
            data
        }));
    return sampleImage;
});
exports.createSampleImage = createSampleImage;
exports.sampleImageResolver = {
    id: ({ id }) => id,
    typeId: ({ typeId }) => typeId,
    url: ({ url }) => url,
    createdAt: ({ createdAt }) => createdAt,
    updatedAt: ({ updatedAt }) => updatedAt
};
exports.default = {
    Query: {
        findAllSampleImage: exports.findAllSampleImage
    },
    Mutation: {
        createSampleImage: exports.createSampleImage
    },
    SampleImage: exports.sampleImageResolver
};
//# sourceMappingURL=sampleImageResolver.js.map