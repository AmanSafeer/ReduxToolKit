# REACT NATIVE 0.72 ERRORS

ERROR: Invariant Violation: Calling synchronous methods on native modules is not supported in Chrome

SOLUTION:
-Go to "node_modules/react-native/Libraries/BatchedBridge/MessageQueue.js"
-Look for "callNativeSyncHook" and replace the whole block with this:
 callNativeSyncHook(
    moduleID: number,
    methodID: number,
    params: any[],
    onFail: ?Function,
    onSucc: ?Function,
  ): any {
    const isDebuggingEnabled = (typeof atob !== 'undefined');
    this.processCallbacks(moduleID, methodID, params, onFail, onSucc);
    if(!isDebuggingEnabled)
    {
      return global.nativeCallSyncHook(moduleID, methodID, params);
    }
  }  

