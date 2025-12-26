// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCommunityPlayIntegrity",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorCommunityPlayIntegrity",
            targets: ["CapacitorPlayIntegrityPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "CapacitorPlayIntegrityPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CapacitorPlayIntegrityPlugin"),
        .testTarget(
            name: "CapacitorPlayIntegrityPluginTests",
            dependencies: ["CapacitorPlayIntegrityPlugin"],
            path: "ios/Tests/CapacitorPlayIntegrityPluginTests")
    ]
)
