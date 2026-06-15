import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { EnvConfig } from './index';

type ObjectKeyPaths<
  T extends object,
  Starting extends string = '',
  Delimiter extends string = '.',
  K extends keyof T = keyof T,
> =
  T extends Array<unknown>
    ? never
    : K extends string | number
      ?
          | `${Starting}${K}`
          | (T[K] extends object
              ? `${`${Starting}${K}`}${ObjectKeyPaths<T[K], Delimiter>}`
              : never)
      : never;

type Get<T, K> = K extends `${infer A extends keyof T & string}.${infer B}`
  ? Get<T[A], B>
  : K extends keyof T
    ? T[K]
    : never;

@Injectable()
export class ConfigServiceBase<T extends object> extends NestConfigService<
  T,
  true
> {
  get<P extends ObjectKeyPaths<T>>(path: P): Get<T, P> {
    return super.get(path as any, { infer: true });
  }
}

export class ConfigService extends ConfigServiceBase<EnvConfig> {}
