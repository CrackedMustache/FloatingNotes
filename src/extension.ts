// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "floating-notes" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const showNotes = vscode.commands.registerCommand(
    "floating-notes.showNotes",
    () => {
      vscode.window.showInformationMessage("Hello from Floating Notes!");

      const quickPick = vscode.window.createQuickPick();
      const options = ["HEYYY", "YOO", "sup!"];

      quickPick.items = options.map((label) => ({ label }));

      quickPick.onDidHide(() => {
        quickPick.dispose();
      });

      quickPick.show();6
      context.subscriptions.push(quickPick);
    }
  );

  //context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
  console.log("DEACTIVATED");
}
