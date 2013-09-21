var HTTPSEverywhere = null;

function updateStatusBar(current_test, total_tests) {
  var labelText = "Test "+current_test+" of "+total_tests;
  document.getElementById("progress-bar-label").value = labelText;

  var percent = current_test / total_tests;
  document.getElementById("progress-bar").value = percent;
}

function updateLog(msg) {
  document.getElementById("log").value += msg + '\n';
}

function cancel() {
  HTTPSEverywhere.httpseRulesetTests.canceled = true;  
}

function start() {
  HTTPSEverywhere = Components.classes["@eff.org/https-everywhere;1"]
    .getService(Components.interfaces.nsISupports)
    .wrappedJSObject;

  HTTPSEverywhere.httpseRulesetTests.updateStatusBar = updateStatusBar;
  HTTPSEverywhere.httpseRulesetTests.updateLog = updateLog;
  HTTPSEverywhere.httpseRulesetTests.cancel = cancel;

  HTTPSEverywhere.httpseRulesetTests.canceled = false;

  HTTPSEverywhere.httpseRulesetTests.testRunner();
}
