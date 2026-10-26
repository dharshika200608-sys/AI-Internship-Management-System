# Project Workflow

## Step 1: Intern Details
Intern names, email addresses, Student IDs, and assigned tasks are stored in Google Sheets.

## Step 2: Task Assignment Email
Google Apps Script reads the intern details and sends task assignment emails using Gmail.

## Step 3: Task Submission
Interns complete their assigned tasks and submit their project links through Google Forms.

## Step 4: Collect Form Responses
Google Form responses are saved in the `Form_Responses` spreadsheet tab.

## Step 5: Verify Intern Details
The `onFormSubmit(e)` function checks the Student ID, registered email address, and assigned task.

## Step 6: Update Submission Link
If the details match, the submitted project link is saved in the main spreadsheet.

## Step 7: Generate Feedback
The script generates predefined checklist feedback for the submission.

## Step 8: Send Feedback Email
The feedback is sent to the intern through Gmail.

## Technologies Used
- Google Sheets
- Google Forms
- Google Apps Script
- Gmail
- JavaScript

## Limitation
Feedback is generated using predefined rules. The script does not automatically inspect or technically evaluate the project code.
