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
exports.favoriteObjectsUserResolver = exports.createFavoriteObjectsUser = exports.findAllFavoriteObjectsUser = void 0;
const verifyIfItIsAdmin_1 = __importDefault(require("../common/middlewares/verifyIfItIsAdmin"));
const findAllFavoriteObjectsUser = (parent, args, context) => {
    return ((0, verifyIfItIsAdmin_1.default)({ context }) &&
        context.orm.favoriteObjectsUser.findMany({
            include: {
                user: true,
                object: true
            }
        }));
};
exports.findAllFavoriteObjectsUser = findAllFavoriteObjectsUser;
const createFavoriteObjectsUser = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const data = args.input;
    const favoriteObjectsUser = (0, verifyIfItIsAdmin_1.default)({ context }) &&
        (yield context.orm.favoriteObjectsUser.create({
            data
        }));
    return favoriteObjectsUser;
});
exports.createFavoriteObjectsUser = createFavoriteObjectsUser;
exports.favoriteObjectsUserResolver = {
    id: ({ id }) => id,
    objectId: ({ objectId }) => objectId,
    userId: ({ userId }) => userId,
    createdAt: ({ createdAt }) => createdAt,
    updatedAt: ({ updatedAt }) => updatedAt
};
exports.default = {
    Query: {
        findAllFavoriteObjectsUser: exports.findAllFavoriteObjectsUser
    },
    Mutation: {
        createFavoriteObjectsUser: exports.createFavoriteObjectsUser
    },
    FavoriteObjectsUser: exports.favoriteObjectsUserResolver
};
//# sourceMappingURL=favoriteObjectsUserResolver.js.map