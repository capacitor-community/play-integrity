import { WebPlugin } from '@capacitor/core';

import type { CapacitorPlayIntegrityPlugin } from './definitions';

export class CapacitorPlayIntegrityWeb
  extends WebPlugin
  implements CapacitorPlayIntegrityPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
