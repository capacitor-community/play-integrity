package com.mycompany.capacitor.play.integrity;

import android.content.Context;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailabilityLight;
import com.google.android.gms.tasks.Task;
import com.google.android.play.core.integrity.IntegrityManager;
import com.google.android.play.core.integrity.IntegrityManagerFactory;
import com.google.android.play.core.integrity.IntegrityTokenRequest;
import com.google.android.play.core.integrity.IntegrityTokenResponse;
import com.google.android.play.core.integrity.model.IntegrityErrorCode;

@CapacitorPlugin(name = "CapacitorPlayIntegrity")
public class CapacitorPlayIntegrityPlugin extends Plugin {

  @PluginMethod
  public void requestIntegrityToken(PluginCall call) {
    String nonce = call.getString("nonce");
    long googleCloudProjectNumber = call.getLong("googleCloudProjectNumber");

    Context context = getContext();
    if (GoogleApiAvailabilityLight.getInstance().isGooglePlayServicesAvailable(context) != ConnectionResult.SUCCESS) {
      call.reject("Play Services not found");
      return;
    }
    IntegrityManager integrityManager = IntegrityManagerFactory.create(context);

    IntegrityTokenRequest req = IntegrityTokenRequest.builder().setNonce(nonce).build();
    if (googleCloudProjectNumber != 0) {
      req = IntegrityTokenRequest.builder().setNonce(nonce).setCloudProjectNumber(googleCloudProjectNumber).build();
    }
    Task<IntegrityTokenResponse> integrityTokenResponse = integrityManager.requestIntegrityToken(req);
    integrityTokenResponse.addOnSuccessListener(integrityTokenResponse1 -> {
      String integrityToken = integrityTokenResponse1.token();
      JSObject ret = new JSObject();
      ret.put("token", integrityToken);
      call.resolve(ret);
    });
    integrityTokenResponse.addOnFailureListener(e -> {
      call.reject(e.getMessage());
    });
  }
}
