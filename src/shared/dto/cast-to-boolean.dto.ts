/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Transform } from 'class-transformer';

export function CastToBoolean(): PropertyDecorator {
  return Transform(({ obj, key }) => {
    switch (String(obj[key]).toLowerCase()) {
      case 'true':
      case 't':
      case '1':
      case 'yes':
      case 'on':
        return true;
      case 'false':
      case 'f':
      case '0':
      case 'no':
      case 'off':
        return false;
      default:
        return obj[key];
    }
  });
}
