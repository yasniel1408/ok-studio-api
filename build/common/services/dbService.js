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
const lowdb_1 = __importDefault(require("lowdb"));
const FileAsync_1 = __importDefault(require("lowdb/adapters/FileAsync"));
const db_json_1 = __importDefault(require("./db.json"));
class DbService {
    constructor() {
        this.initDatabase();
    }
    initDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            const adapter = new FileAsync_1.default('db.json');
            this.db = yield (0, lowdb_1.default)(adapter);
            yield this.db.defaults(db_json_1.default).write();
        });
    }
}
exports.default = new DbService();
// interface Status {
//   key: string;
//   username: string;
//   status: 'UP' | 'DOWN' | 'COOLING' | 'SUSPENDED';
// }
// interface Clients {
//   key: string;
//   status: boolean;
//   username: string;
//   password: string;
// }
// interface SessionStates {
//   key: string;
//   session: Object;
// }
// interface Database {
//   clients: Array<Clients>;
//   status: Array<Status>;
//   sessionStates: Array<SessionStates>;
// }
// const adapter = new FileSync<Database>('db.json');
// const db = low(adapter);
// db.defaults({
//   clients: [],
//   status: []
// }).write();
// export default db;
//# sourceMappingURL=dbService.js.map