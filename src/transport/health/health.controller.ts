import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('/healthcheck')
  healthcheck(): string {
    return this.healthService.getHello();
  }
}
