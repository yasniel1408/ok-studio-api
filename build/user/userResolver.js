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
exports.userResolver = exports.login = exports.signup = exports.findAllUsers = void 0;
const apollo_server_core_1 = require("apollo-server-core");
const newToken_1 = __importDefault(require("../common/jwt/newToken"));
const verifyIfItIsAdmin_1 = __importDefault(require("../common/middlewares/verifyIfItIsAdmin"));
const comparePasswords_1 = __importDefault(require("../common/password/comparePasswords"));
const encryptPassword_1 = __importDefault(require("../common/password/encryptPassword"));
const findAllUsers = (parent, args, context) => {
    return ((0, verifyIfItIsAdmin_1.default)({ context }) &&
        context.orm.user.findMany({
            skip: args === null || args === void 0 ? void 0 : args.skip,
            take: args === null || args === void 0 ? void 0 : args.take,
            where: args === null || args === void 0 ? void 0 : args.where
        }));
};
exports.findAllUsers = findAllUsers;
const signup = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name } = args.input;
    const user = yield context.orm.user.create({
        data: {
            name,
            email,
            password: yield (0, encryptPassword_1.default)(password)
        }
    });
    return user;
});
exports.signup = signup;
function login(parent, args, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = args.input;
        const user = yield context.orm.user.findFirst({
            where: {
                email
            }
        });
        if (!user) {
            throw new apollo_server_core_1.AuthenticationError('No user with that email');
        }
        const valid = yield (0, comparePasswords_1.default)(password, user.password);
        if (!valid) {
            throw new apollo_server_core_1.AuthenticationError('Incorrect password');
        }
        return (0, newToken_1.default)(user);
    });
}
exports.login = login;
exports.userResolver = {
    id: ({ id }) => id,
    name: ({ name }) => name,
    email: ({ email }) => email,
    password: ({ password }) => password,
    createdAt: ({ createdAt }) => createdAt,
    updatedAt: ({ updatedAt }) => updatedAt,
    role: ({ role }) => role
};
exports.default = {
    Query: {
        findAllUsers: exports.findAllUsers
    },
    Mutation: {
        signup: exports.signup,
        login
    },
    User: exports.userResolver
};
//# sourceMappingURL=userResolver.js.map