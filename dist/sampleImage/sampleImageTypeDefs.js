"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleImageTypeDefs = void 0;
const apollo_server_1 = require("apollo-server");
const schema_1 = require("../common/schema");
const SampleImageInput_1 = require("./fragments/SampleImageInput");
exports.sampleImageTypeDefs = (0, apollo_server_1.gql) `
  ${schema_1.schema}
  ${SampleImageInput_1.SampleImageInput}

  type Mutation {
    createSampleImage(input: SampleImageInput): SampleImage!
  }

  type Query {
    findAllSampleImage: [SampleImage]
  }
`;
//# sourceMappingURL=sampleImageTypeDefs.js.map