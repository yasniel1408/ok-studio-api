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
exports.contractResolver = exports.createContract = exports.findAllContract = void 0;
const verifyIfItIsAdmin_1 = __importDefault(require("../common/middlewares/verifyIfItIsAdmin"));
const findAllContract = (parent, args, context) => {
    return ((0, verifyIfItIsAdmin_1.default)({ context }) &&
        context.orm.contract.findMany({
            include: { appointment: true, type: true }
        }));
};
exports.findAllContract = findAllContract;
const createContract = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const data = args.input;
    const contract = (0, verifyIfItIsAdmin_1.default)({ context }) &&
        (yield context.orm.contract.create({
            data
        }));
    return contract;
});
exports.createContract = createContract;
exports.contractResolver = {
    id: ({ id }) => id,
    name: ({ name }) => name,
    typeId: ({ typeId }) => typeId,
    createdAt: ({ createdAt }) => createdAt,
    updatedAt: ({ updatedAt }) => updatedAt
};
exports.default = {
    Query: {
        findAllContract: exports.findAllContract
    },
    Mutation: {
        createContract: exports.createContract
    },
    Contract: exports.contractResolver
};
//# sourceMappingURL=contractResolver.js.map