# Google Form Setup

## Form Name
AI Internship Task Submission

## Purpose
This form collects internship task submissions from interns.

## Form Questions
1. Student ID
2. Email Address
3. Task Name
4. Submission Link

## Submission Workflow
1. The intern opens the Google Form.
2. The intern enters their Student ID and registered email.
3. The intern selects their assigned task.
4. The intern provides the project submission link.
5. The intern submits the form.

## Response Storage
Responses are stored in the `Form_Responses` tab of the connected Google Spreadsheet.

## Apps Script Integration
The `onFormSubmit(e)` function runs through an installed spreadsheet form-submit trigger.

It checks the submitted Student ID, email address, and assigned task against the intern records.

If the details match, the submission link is stored in the main spreadsheet.

## Feedback Automation
The script generates predefined rule-based feedback and sends it by email.

## Important Note
This feedback is based on predefined rules. It does not perform an actual AI technical evaluation.

## Security
Do not publish private form responses, student personal information, or passwords.
