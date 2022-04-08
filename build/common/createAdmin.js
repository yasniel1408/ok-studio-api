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
/* eslint-disable no-console */
const client_1 = require('@prisma/client');
const prompt_1 = __importDefault(require('prompt'));
const encryptPassword_1 = __importDefault(require('./password/encryptPassword'));
const orm = new client_1.PrismaClient();
prompt_1.default.start();
prompt_1.default.get(
  [
    {
      name: 'name',
      message: 'Name',
      required: true
    },
    {
      name: 'email',
      message: 'Email',
      required: true
    },
    {
      name: 'password',
      message: 'Password',
      required: true
    }
  ],
  (err, result) =>
    __awaiter(void 0, void 0, void 0, function* () {
      if (err) {
        console.warn('Huh. Something went wrong.');
        return;
      }
      const name = result.name;
      const email = result.email;
      const hashedPassword = yield (0, encryptPassword_1.default)(result.password);
      const user = yield orm.user.create({
        data: {
          password: hashedPassword,
          name,
          email,
          role: 'ADMIN'
        }
      });
      console.log(`User ${name} created with id ${user.id}\n`);
    })
);
//# sourceMappingURL=createAdmin.js.map
