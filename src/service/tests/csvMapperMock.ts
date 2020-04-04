export default `
NEW Phase 3 - Scrum Team Daily Board,,,,,,,
"If ticket is a feature ticket, status should be used for epics only
Labels can be used to other purposes: sprint goal, last sprint, tech validation, future sprint, depriortised etc.

Stock = to validate, merging to master, merging to production

Definition as done: validate as the user on the user story

Prod PR template: Production Deploy YYYY-MM-DD {NUM_DEPLOY_TODAY}",,,,,,,
,,,,,,,
"Phase 3, Sprint 1: AACKU, on the home page, when I click on my contact database button, I am taken to the contact database of the latest survey",,,,,,,
Name,Status,Labels,Points,Person,Item ID,Priority Order,Item ID (auto generated)
"SPRINT GOAL: AACKU, on the home page, when I click on my contact database button, I am taken to the contact database of the latest survey",Access Latest Survey,SprintGoal,,,504135682,,504135682
"(2) - AACKUser on the home page, when there are no surveys in an organisation, the button ""My Contact Database"" is disabled",Access Latest Survey,SprintGoal,2,,505730979,,505730979
"(3) - AACRCUser on the /survey/create page, when I create a survey, I can choose an existing survey from a dropdown to copy from",Create Repeat Survey,,3,,504135687,,504135687
(1) [TIMEBOX 1h*1dev] Backlog Refinement,Sprint Meeting,SprintTemplate,1,,507679466,,507679466
(2) [TIMEBOX 1h*2dev] Technical Refinement,Sprint Meeting,SprintTemplate,2,,507679467,,507679467
(2) [TIMEBOX 1h*2dev] Technical Refinement,Sprint Meeting,SprintTemplate,2,,507679474,,507679474
(0.5) [TIMEBOX 30m] Clean up of any new sentry errors,Tech Debt,SprintTemplate,0.5,,507679465,,507679465
(2) [TIMEBOX 1hr*2dev] Tech ref preparation,Continuous Improvement,SprintTemplate,2,,507679486,,507679486
(1) Coaching Rob<>Alex,Coaching,SprintTemplate,1,,507679468,,507679468
(1) Coaching Omar<>Mike,Coaching,SprintTemplate,1,,507679472,,507679472
Coaching Elio<>Mike,Coaching,SprintTemplate,,,507679478,,507679478
Coaching Frank<>Mike,Coaching,SprintTemplate,,,507679484,,507679484
"[TIMEBOX 1/2day*1dev] AACRC/CKUser on the CDB page, I can see a dropdown for the CC/PC/I and status column for existing surveys and surveys created with existing products (e.g. TRR product)",Go Live Support,SprintReady,,Rob Cronin,507017759,,507017759
"(2) - AACRCUser on the /contact-database page, when I look at the left side of the ""Approve selected"" button, I see a button labelled ""Freeze contacts""",Transfer Previous Contacts,SprintReady,,,504827399,,504827399
"(3) - AACRCUser on the /survey/create page, when I click on an existing survey from the dropdown, the ""from email address"" is pre-populated from the chosen survey",Create Repeat Survey,SprintReady,,,504786209,,504786209
"(3) - AACRCUser on the /survey/create page, when I click on the choose from existing survey toggle, it shows me the dropdown for the existing surveys",Create Repeat Survey,SprintReady,,,504779210,,504779210
"AADev on the /survey/create page, when I click on the ""next"" button to create a survey, the survey is created with the same settings of the copied survey",Create Repeat Survey,Blocked,,,504785148,,504785148
"(3) AACRCUser on the /survey/create page, when I click on the ""next"" button, I will be taken to the /unit-confirmation page",Create Repeat Survey,SprintReady,,,504792052,,504792052
"AADev on the /contact-database page, when I click on the ""Freeze contacts"" button, it will create a contact snapshot of the contacts in the database",Transfer Previous Contacts,,,,504836657,,504836657
"AACRCUser, on the /contact-database page, when I click the ""Freeze contacts"" button in the top right, I see a success message saying ""Survey contacts frozen""",Transfer Previous Contacts,,,,504812527,,504812527
"AACRCUser, on the delivery platform, when I create a survey based on the new survey flow, it will send an email to approved and active status contacts on the frozen contact database",Transfer Previous Contacts,,,,504829900,,504829900
"AADev, when I run the import script for the new hub CSV format, I can see the simple fields appear on the CDB page",Go Live Support,,,,505221317,,505221317
"AADev, when I run the import script for the new hub CSV format, I can see the CC/PC fields appear on the CDB page",Go Live Support,,,,505222629,,505222629
"AACRCUser on the surveyCreatePage when I toggle the copy from previous survey button and re-toggle it, the from email address is now blank",Create Repeat Survey,,,,505786165,,505786165
"AADev, when I call the POST of /contactsnapshot, it will create snapshot of the contacts",Transfer Previous Contacts,,,,507108734,,507108734
(1) Coaching Omar <>Mike M/Josh,Coaching,SprintTemplate,,,507679489,,507679489
~~~~~~~~ Sprint 2 Tickets ~~~~~~~~~,,,,,508516460,,508516460
[TIMEBOX 1hr*2.5dev]Kaizen Starter,Additional Meeting,Removed,,"Alex Wong, Omar Bello, Mike Riddelsdell, Elio Stalteri, Frank Shenton, Rob Cronin, Tom Elliott",507734065,,507734065
"[TIMEBOX] AACRCUser, on the unit confirmation page, I can edit a unit combo and save/approve without an error",Bug,,,,508516508,,508516508
"AAUser, I can see all options in all lists in alphabetical order",UX/UI,LastSprint,5,"Omar Bello, Frank Shenton",511383991,,511383991
"AACKUser, when I try and log on to the delivery platform using internet explorer, I am directed to a page that explains I cannot use this browser and highlights which browsers I can use",Go Live Support,,,,511619117,,511619117
"AASuperAdmin, I can give myself permission to view a new contact database",Bug,,,,511732749,,511732749
,,,19.5,,,,`;
