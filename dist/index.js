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
const apollo_server_express_1 = require("apollo-server-express");
const client_1 = require("@prisma/client");
const apollo_server_core_1 = require("apollo-server-core");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const getUser_1 = __importDefault(require("./common/jwt/getUser"));
const user_1 = require("./user");
const type_1 = require("./type");
const favoriteObjectsUser_1 = require("./favoriteObjectsUser");
const object_1 = require("./object");
const objectImage_1 = require("./objectImage");
const client_2 = require("./client");
const contract_1 = require("./contract");
const sampleImage_1 = require("./sampleImage");
const appointment_1 = require("./appointment");
dotenv_1.default.config();
process.env.JWT_SECRET = process.env.JWT_SECRET || 'okstudiosupersecretkey';
const port = process.env.PORT || 4000;
const orm = new client_1.PrismaClient();
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
app.use('/static', express_1.default.static(path_1.default.join(__dirname, './public')));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.get('/hello', (req, res) => {
    res.send('HOLA MUNDO');
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    const apolloServer = new apollo_server_express_1.ApolloServer({
        typeDefs: [
            user_1.userTypeDefs,
            type_1.typeTypeDefs,
            favoriteObjectsUser_1.favoriteObjectsUserTypeDefs,
            object_1.objectTypeDefs,
            objectImage_1.objectImageTypeDefs,
            client_2.clientTypeDefs,
            contract_1.contractTypeDefs,
            sampleImage_1.sampleImageTypeDefs,
            appointment_1.appointmentTypeDefs
        ],
        resolvers: [
            user_1.userResolver,
            type_1.typeResolver,
            favoriteObjectsUser_1.favoriteObjectsUserResolver,
            object_1.objectResolver,
            objectImage_1.objectImageResolver,
            client_2.clientResolver,
            contract_1.contractResolver,
            sampleImage_1.sampleImageResolver,
            appointment_1.appointmentResolver
        ],
        context: ({ req }) => {
            const authorization = req.headers.authorization || '';
            const user = (0, getUser_1.default)({ authorization });
            return { orm, user };
        },
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        introspection: true
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: '/graphql'
    });
    yield httpServer.listen({ port });
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
}))();
//# sourceMappingURL=index.js.map