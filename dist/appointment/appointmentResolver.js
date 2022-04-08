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
exports.appointmentResolver = exports.createAppointment = exports.findAllAppointment = void 0;
const verifyIfItIsAdmin_1 = __importDefault(require("../common/middlewares/verifyIfItIsAdmin"));
const findAllAppointment = (parent, args, context) => {
    return ((0, verifyIfItIsAdmin_1.default)({ context }) &&
        context.orm.appointment.findMany({
            include: { contract: true, client: true }
        }));
};
exports.findAllAppointment = findAllAppointment;
const createAppointment = (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
    const data = args.input;
    const appointment = (0, verifyIfItIsAdmin_1.default)({ context }) &&
        (yield context.orm.appointment.create({
            data
        }));
    return appointment;
});
exports.createAppointment = createAppointment;
exports.appointmentResolver = {
    id: ({ id }) => id,
    contractId: ({ contractId }) => contractId,
    clientId: ({ clientId }) => clientId,
    accepted: ({ accepted }) => accepted,
    notes: ({ notes }) => notes,
    createdAt: ({ createdAt }) => createdAt,
    updatedAt: ({ updatedAt }) => updatedAt
};
exports.default = {
    Query: {
        findAllAppointment: exports.findAllAppointment
    },
    Mutation: {
        createAppointment: exports.createAppointment
    },
    Appointment: exports.appointmentResolver
};
//# sourceMappingURL=appointmentResolver.js.map