/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

const OPENAPI_DESCRIPTION = `
Introduction
Welcome to the OpenAPI documentation for DataConsultingServer.
`;

export const DOC_RELATIVE_PATH = 'docs';

export function makeOpenApiDocument(app: INestApplication): OpenAPIObject {
  const configSwagger = new DocumentBuilder()
    .setTitle('Data-Consulting-Server Documentation')
    .setDescription(OPENAPI_DESCRIPTION)
    .setVersion('1.0')
    .addSecurity('Authorization', {
      type: 'http',
      name: 'Authorization',
      scheme: 'Bearer',
    })
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);

  return document;
}
