import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';
import { schema } from '../common/schema';
import { SampleImageInput } from './fragments/SampleImageInput';

export const sampleImageTypeDefs: DocumentNode = gql`
  ${schema}
  ${SampleImageInput}

  type Mutation {
    createSampleImage(input: SampleImageInput): SampleImage!
  }

  type Query {
    findAllSampleImage: [SampleImage]
  }
`;
