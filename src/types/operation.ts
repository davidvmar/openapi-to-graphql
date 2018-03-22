/**
 * Type definitions for the objects created during preprocessing for every
 * operation in the OAS.
 */

import {
  LinkObject,
  ParameterObject,
  ServerObject,
  SchemaObject
} from './oas3'

import {
  GraphQLScalarType,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLEnumType
} from 'graphql'

export type DataDefinition = {
  schema: SchemaObject,
  otName: string,
  iotName: string,
  ot?: GraphQLObjectType | GraphQLScalarType | GraphQLList<any> | GraphQLEnumType,
  iot?: GraphQLInputObjectType | GraphQLList<any>
}

export type Operation = {
  /**
   * Identifier of the operation - may be created by concatenating method & path
   */
  operationId: string,

  /**
   * Human-readable description of the operation
   */
  description: string,

  /**
   * URL path of this operation
   */
  path: string,

  /**
   * HTTP method for this operation
   */
  method: string,

  /**
   * Information about the request payload (if any)
   */
  reqDef?: DataDefinition,

  /**
   * Determines wheter request payload is required for the request
   */
  reqRequired: boolean,

  /**
   * Information about the response payload
   */
  resDef: DataDefinition,

  /**
   * Links of the operation
   */
  links: {
    [key: string]: LinkObject
  },

  /**
   * List of parameters of the operation
   */
  parameters: ParameterObject[],

  /**
   * List of keys of security schemes required by this operation
   *
   * NOTE: Keys are beautified
   * NOTE: Does not contain OAuth 2.0-related security schemes
   */
  securityRequirements: string[],

  /**
   * (Local) server definitions of the operation.
   */
  servers: ServerObject[],

  /**
   * List of operations which are nested based on their path.
   */
  subOps?: Operation[]
}