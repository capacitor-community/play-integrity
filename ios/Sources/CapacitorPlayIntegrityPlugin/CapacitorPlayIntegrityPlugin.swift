import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorPlayIntegrityPlugin)
public class CapacitorPlayIntegrityPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "CapacitorPlayIntegrityPlugin" 
    public let jsName = "CapacitorPlayIntegrity" 
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "requestIntegrityToken", returnType: CAPPluginReturnPromise),
    ] 

    @objc func requestIntegrityToken(_ call: CAPPluginCall) {
        call.resolve([
            "token": ""
        ])
    }
}
