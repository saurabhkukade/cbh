# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


### Ticket 1. 

#### Title
Create a new model AgentFacilityDetails,

#### Description
Creat a new model AgentFacilityDetails details where agentId and facilityId should be the foreign key reference from the table Agents and Facilities respectively.
Add field to agentFacilityId to store the custom id information per facility.

#### Original esitimated efforts,
2h


### Ticket 2. 

#### Title
Create a function / API to assign agent faciily id.

#### Description
Implement a function to assign a custom id by facility to an agent. Function will have 3 inputs
- agentId
- facilityId
- agentCustomId

create a new entry in AgentFacilityDetails with above details and if the the entry with agentId and facilityId alredy exists then the entry must be updated with new agentCustomId instead of new entry.

#### Original esitimated efforts,
4h


### Ticket 3. 

#### Title
Create a lookup function / API getAgentFacilityId to get the custom agent faciily custom id.

#### Description
Implement a function getAgentFacilityId to fetch the agent facility custom id, this lookup function will have 2 inputs
- agentId
- facilityId

and should return agentCustomId.

#### Original esitimated efforts,
2h



### Ticket 4. 

#### Title
Amend generate report function to generate the reports with agent facilty custom ids,

#### Description
Change the logic of generateReport function by using getAgentFacilityId function to replace the agentId with
agentCustomId assigned by respective facility to generate the agent work report.


#### Original esitimated efforts,
4h