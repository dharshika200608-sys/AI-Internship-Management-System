# Google Form Setup

## Form Title
AI Internship Task Submission

## Purpose
This form collects internship task submissions from interns.

## Form Questions
1. Student ID
2. Email Address
3. Task Name
4. Submission Link

## Submission Process
1. The intern opens the Google Form.
2. The intern enters their Student ID and email address.
3. The intern selects the assigned task.
4. The intern provides the project submission link.
5. The intern submits the form.

## Response Storage
Form responses are stored in the `Form_Responses` tab of the connected Google Spreadsheet.

## Apps Script Integration
An installable spreadsheet form-submit trigger runs the `onFormSubmit(e)` function when a new response arrives.

The script checks the Student ID, email address, and assigned task. If the details match an intern record, the submission link is saved in the main sheet.

## Feedback Automation
The script generates predefined rule-based feedback and sends it to the intern by email.

## Important Notes
- Enter the correct Student ID.
- Use the registered email address.
- Select the correct assigned task.
- Submit a valid project URL.
- Feedback is checklist-based and does not represent an actual AI technical evaluation.

## Privacy
Do not publish private form response data or student personal information in a public repository.
