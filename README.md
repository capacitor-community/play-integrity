<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">PLAY INTEGRITY</h3>
<p align="center"><strong><code>@capacitor-community/play-integrity</code></strong></p>
<br>

The Play Integrity API is used to verify that your app is a Genuine App Binary that has not been modified compared to what is available on the Play Store. It validates that the current user account is licensed (the user that installed or paid for your app) and whether the app is free from known malware.

This plugin calls the Play Integrity API [`requestIntegrityToken`](https://developer.android.com/google/play/integrity/classic) method which returns a token that your App's server must verify with Google Play Servers.

The call `requestIntegrityToken` will return a `token` on success which you must send to your backend for verification. See [Google's Docs on this](https://developer.android.com/google/play/integrity/classic#decrypt-verify).

## Install

```bash
npm install @capacitor-community/play-integrity
npx cap sync
```

## Usage

```typescript
import { PlayIntegrity } from '@capacitor-community/play-integrity';
...
try {
      // Nonce: See https://developer.android.com/google/play/integrity/classic
      // googleCloudProjectNumber: leave as 0 for the default for the application
      // or get from https://console.firebase.google.com/ Project Settings > General
      const result = await PlayIntegrity.requestIntegrityToken({
        nonce: nonce,
        googleCloudProjectNumber: 0
      });
      // Use result.token and decrypt and verify the integrity verdict
      // https://developer.android.com/google/play/integrity/classic#decrypt-verify
      console.log(`Play Integrity Result`, result);
    } catch (err) {
        // Recommendation: Report to backend and exit the application
    }
```

## Android

### Variables

This plugin will use the following project variables (defined in your app's `variables.gradle` file):

- `googlePlayIntegrityVersion`: version of `com.google.android.play:integrity` (default: `1.3.0`)

## API

<docgen-index>

* [`requestIntegrityToken(...)`](#requestintegritytoken)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestIntegrityToken(...)

```typescript
requestIntegrityToken(options: { nonce: string; googleCloudProjectNumber: number; }) => Promise<{ token: string; }>
```

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code>{ nonce: string; googleCloudProjectNumber: number; }</code> |

**Returns:** <code>Promise&lt;{ token: string; }&gt;</code>

--------------------

</docgen-api>

## Errors
The following errors can occur and should be handled.

### Integrity API not available
```
Error: -1: Integrity API error (-1): Integrity API is not available.
Integrity API is not enabled, or the Play Store version might be old.
Recommended actions:
1) Make sure that Integrity API is enabled in Google Play Console.
2) Ask the user to update Play Store.
 (https://developer.android.com/google/play/integrity/reference/com/google/android/play/core/integrity/model/IntegrityErrorCode.html#API_NOT_AVAILABLE).
```

### Play Services not found
```
Play Services not found
```