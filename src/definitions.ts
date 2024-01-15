export interface CapacitorPlayIntegrityPlugin {
  requestIntegrityToken(options: {
    /**
     * The nonce must be a string, url-safe, encoded as base64 and non-wrapping, minimum 16 characters, maxiumum 500 characters.
     * See https://developer.android.com/google/play/integrity/classic#nonce
     * @type {string}
     */
    nonce: string;
    googleCloudProjectNumber: number;
  }): Promise<{ token: string }>;
}
