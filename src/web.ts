import { WebPlugin } from '@capacitor/core';

import type { CapacitorPlayIntegrityPlugin } from './definitions';

export class CapacitorPlayIntegrityWeb extends WebPlugin implements CapacitorPlayIntegrityPlugin {
  async requestIntegrityToken(options: {
    nonce: string;
    googleCloudProjectNumber: number;
  }): Promise<{ token: string }> {
    if (!options.nonce) {
      throw new Error(`Nonce must be specified`);
    }
    return { token: '' };
  }
}
