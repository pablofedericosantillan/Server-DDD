import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AssetServerConfig } from './mongo.config';
import { PulsarProducerConfig } from './pulsar-producer.config';
import { PricingServerConfig } from './pricing-server.config';

export class EnvConfig {
  @Type(() => AssetServerConfig)
  @ValidateNested()
  assetServerConfig = new AssetServerConfig();

  @Type(() => PulsarProducerConfig)
  @ValidateNested()
  pulsarProducer = new PulsarProducerConfig();

  @Type(() => PricingServerConfig)
  @ValidateNested()
  pricingServerConfig = new PricingServerConfig();
}
