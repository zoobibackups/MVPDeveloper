#import "AppDelegate.h"
#import "RNSplashScreen.h"
#import <React/RCTBundleURLProvider.h>
#import <Firebase.h>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"MVPDeveloper";
  self.initialProps = @{};
  bool didFinish=[super application:application didFinishLaunchingWithOptions:launchOptions]; // added
  [FIRApp configure];
  [RNSplashScreen show];  // here
  return didFinish; 
  //return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
