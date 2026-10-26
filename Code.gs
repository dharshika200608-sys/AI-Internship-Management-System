function testTaskEmails() {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Sheet1");

  const lastRow = sheet.getLastRow();

  if (lastRow < 8) {
    Logger.log("No intern records found.");
    return;
  }

  const data = sheet.getRange(8, 2, lastRow - 7, 13).getValues();

  for (let i = 0; i < data.length; i++) {
    const name = data[i][1];
    const email = data[i][2];
    const task = data[i][5];
    const status = data[i][6];

    if (email && task && status === "Pending") {
      Logger.log("To: " + email);
      Logger.log("Subject: Your Internship Task");
      Logger.log("Hi " + name + ",");
      Logger.log("Assigned Task: " + task);
      Logger.log("--------------------");
    }
  }
}










function sendTestEmail() {
  const myEmail = "dharshika200608@gmail.com";

  const subject = "Internship Management System - Test";
  const message =
    "Hi!\n\n" +
    "This is a test email from the Internship Management System.\n\n" +
    "Email automation is being tested successfully.";

  GmailApp.sendEmail(myEmail, subject, message);

  Logger.log("Test email sent to: " + myEmail);
}









function sendTaskEmails() {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Sheet1");

  const lastRow = sheet.getLastRow();

  if (lastRow < 8) {
    Logger.log("No intern records found.");
    return;
  }

  const data = sheet.getRange(8, 2, lastRow - 7, 13).getValues();

  for (let i = 0; i < data.length; i++) {
    const name = data[i][1];
    const email = data[i][2];
    const task = data[i][5];
    const emailStatus = data[i][6];

    if (
      email &&
      !String(email).toLowerCase().includes("example.com") &&
      task &&
      emailStatus === "Pending"
    ) {
      const subject = "Your Internship Task";

      const message =
        "Hi " + name + ",\n\n" +
        "Welcome to our internship program!\n\n" +
        "Your assigned task is:\n" +
        task + "\n\n" +
        "Please complete your assigned task and submit your work as instructed by your guide.\n\n" +
        "Best wishes,\n" +
        "Internship Management Team";

      GmailApp.sendEmail(email, subject, message);

      sheet.getRange(i + 8, 8).setValue("Sent");

      Logger.log("Email sent to: " + email);
    } else {
      Logger.log("Skipped row " + (i + 8) + ": Check email, task, or status.");
    }
  }
}




function onFormSubmit(e) {
  const responseSheet = e.range.getSheet();

  // Process only Google Form responses
  if (responseSheet.getName() !== "Form_Responses") return;

  const response = e.values;

  // Form response columns:
  // A = Timestamp, B = Student ID,
  // C = Email, D = Task Name, E = Submission Link
  const studentId = String(response[1]).trim();
  const email = String(response[2]).trim().toLowerCase();
  const submissionLink = String(response[4]).trim();

  if (!studentId || !email || !submissionLink) return;

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const internSheet = ss.getSheetByName("Sheet1");

  if (!internSheet) {
    throw new Error("Sheet1 not found.");
  }

  const lastRow = internSheet.getLastRow();
  if (lastRow < 8) return;

  // Read Student ID and Email from columns B and D
  const interns = internSheet
    .getRange(8, 2, lastRow - 7, 3)
    .getValues();

  for (let i = 0; i < interns.length; i++) {
    const existingId = String(interns[i][0]).trim();
    const existingEmail = String(interns[i][2])
      .trim()
      .toLowerCase();

    if (existingId === studentId && existingEmail === email) {
      // Column K = Submission_Link
      internSheet.getRange(i + 8, 11).setValue(submissionLink);

      Logger.log("Submission link updated for " + studentId);
      return;
    }
  }

  Logger.log("No matching intern found for " + studentId);
}

