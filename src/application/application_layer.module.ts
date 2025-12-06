// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import {
//   CollateralArrangementRepository,
//   CollateralArrangementSchema,
//   CollateralArrangementModelName,
//   ChangelogRepository,
//   ChangelogSchema,
//   ChangelogModelName,
//   FeeRepository,
//   FeeModelName,
//   FeeSchema,
//   ObligationRepository,
//   ObligationModelName,
//   ObligationSchema,
//   TransactionManager,
// } from '@Repositories';
// import { AssetServerService, DomainEventsService, PricingService } from '@ExternalServices';
// import { PulsarProducerModule } from '@lattice-trade/pulsar';
// import { ConfigModule, ConfigService } from '@Config';
// import { TRANSACTION_MANAGER_TOKEN } from './interfaces/transaction_manager';
// import { ASSET_SERVICE_TOKEN } from './interfaces/asset_service';
// import { COLLATERAL_REPOSITORY_TOKEN } from './interfaces/collateral_repository';
// import { CHANGELOG_REPOSITORY_TOKEN } from './interfaces/changelog_repository';
// import { FEE_REPOSITORY_TOKEN } from './interfaces/fee_repository';
// import { OBLIGATION_REPOSITORY_TOKEN } from './interfaces/obligation_repository';
// import { DOMAIN_EVENTS_SERVICE_TOKEN } from './interfaces/domain_events_service';
// import { PRICING_SERVICE_TOKEN } from './interfaces/pricing_service';
// import { GetChangelogsQueryHandler } from './queries/get_changelogs.query';
// import { CreateFeeCommandHandler } from './commands/create_fee.command';
// import { GetFeesQueryHandler } from './queries/get_fees.query';
// import { DeleteFeeCommandHandler } from './commands/delete_fee.command';
// import { GetFeeQueryHandler } from './queries/get_fee.query';
// import { EditFeeCommandHandler } from './commands/edit_fee.command';
// import { GetObligationQueryHandler } from './queries/get_obligation.query';
// import { GetObligationsQueryHandler } from './queries/get_obligations.query';

// TODO: update this module

// @Module({
//   imports: [
//     ConfigModule,
//     MongooseModule.forFeature([
//       { name: CollateralArrangementModelName, schema: CollateralArrangementSchema },
//       { name: ChangelogModelName, schema: ChangelogSchema },
//       { name: FeeModelName, schema: FeeSchema },
//       { name: ObligationModelName, schema: ObligationSchema },
//     ]),
//     PulsarProducerModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => {
//         return {
//           ...configService.get('pulsarProducer'),
//           appName: 'collateral-service',
//         };
//       },
//       inject: [ConfigService],
//       transactionalOutbox: {
//         useMongo: true,
//         useSql: false,
//       },
//     }),
//   ],
//   controllers: [],
//   providers: [
//     { provide: ASSET_SERVICE_TOKEN, useClass: AssetServerService },
//     { provide: COLLATERAL_REPOSITORY_TOKEN, useClass: CollateralArrangementRepository },
//     { provide: CHANGELOG_REPOSITORY_TOKEN, useClass: ChangelogRepository },
//     { provide: FEE_REPOSITORY_TOKEN, useClass: FeeRepository },
//     { provide: OBLIGATION_REPOSITORY_TOKEN, useClass: ObligationRepository },
//     { provide: TRANSACTION_MANAGER_TOKEN, useClass: TransactionManager },
//     { provide: DOMAIN_EVENTS_SERVICE_TOKEN, useClass: DomainEventsService },
//     { provide: PRICING_SERVICE_TOKEN, useClass: PricingService },
//     GetChangelogsQueryHandler,
//     CreateFeeCommandHandler,
//     GetFeesQueryHandler,
//     DeleteFeeCommandHandler,
//     GetFeeQueryHandler,
//     EditFeeCommandHandler,
//     GetObligationQueryHandler,
//     GetObligationsQueryHandler,
//   ],
//   exports: [
//     GetChangelogsQueryHandler,
//     CreateFeeCommandHandler,
//     GetFeesQueryHandler,
//     DeleteFeeCommandHandler,
//     GetFeeQueryHandler,
//     EditFeeCommandHandler,
//     GetObligationQueryHandler,
//     GetObligationsQueryHandler,
//   ],
// })
// export class ApplicationModule {}
