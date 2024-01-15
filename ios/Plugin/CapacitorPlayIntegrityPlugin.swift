import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorPlayIntegrityPlugin)
public class CapacitorPlayIntegrityPlugin: CAPPlugin {

    @objc func requestIntegrityToken(_ call: CAPPluginCall) {
        call.resolve([
            "token": ""
        ])
    }
}
