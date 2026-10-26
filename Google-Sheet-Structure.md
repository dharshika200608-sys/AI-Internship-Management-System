# Google Sheet Structure

## Overview
Google Sheets is used to store intern details, assigned tasks, submission links, and feedback.

## Sheet 1: Sheet1
This sheet stores the main internship records.

| Column | Field Name | Purpose |
|---|---|---|
| B | Student_ID | Identifies each intern |
| C | Name | Stores the intern's name |
| D | Email | Stores the intern's email |
| E | Joining_Date | Records the joining date |
| F | Module | Stores the assigned module |
| G | Assigned_Task | Stores the internship task |
| H | Task_Email_Status | Tracks task email status |
| I | Review_Date | Stores the review date |
| J | Review_Time | Stores the review time |
| K | Submission_Link | Stores the submitted project link |
| L | AI_Feedback | Stores generated rule-based feedback |
| M | Next_Review_Date | Stores the next review date |
| N | Status | Tracks the current status |

## Sheet 2: Form_Responses
This sheet stores Google Form submissions.

| Column | Field Name | Purpose |
|---|---|---|
| A | Timestamp | Submission date and time |
| B | Student ID | Identifies the intern |
| C | Email Address | Verifies the intern's email |
| D | Task Name | Identifies the submitted task |
| E | Submission Link | Stores the project URL |

## Automation
Google Apps Script matches the submitted Student ID and email with the intern records. If the details match, it updates the submission link and generates predefined feedback.

## Privacy
Actual student records and private information should not be uploaded to a public repository.
