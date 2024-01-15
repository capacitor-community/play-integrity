import { registerPlugin } from '@capacitor/core';

import type { CapacitorPlayIntegrityPlugin } from './definitions';

const PlayIntegrity = registerPlugin<CapacitorPlayIntegrityPlugin>(
  'CapacitorPlayIntegrity',
  {
    web: () => import('./web').then(m => new m.CapacitorPlayIntegrityWeb()),
  },
);

export * from './definitions';
export { PlayIntegrity };
