import type { Schedule, Students, warning } from "../src/assets/mockData"
import { mockStudents } from "../src/assets/mockData";

export const generateSchedule = (appSchedule: Schedule) => {
    const warning: warning[] = [];
    const newSchedule: Schedule = JSON.parse(JSON.stringify(appSchedule));

    newSchedule.map( (timeSlot) => 
    {
        timeSlot.map( (slot) => {
            /**Availability Check */
            //All the modules which have a class taking place during the slot:
            const studentsAttendingClass = slot.blockingModules.map( (blockedModule) => mockStudents.filter((eachStudent) => !eachStudent.modules?.includes(blockedModule)));
            
            //An array that contains all students who are free for a shift during the slot:
            let availableStudents: Students[] = [];
            studentsAttendingClass.map((eachModule) => eachModule.map((student) => availableStudents.push(student))); //move all students from slotModules into availableStudents


            //following loop removes those who are unavailble for the slot, but appear on availableStudents
            slot.unavailable.map((eachStudent) => availableStudents.map( (student) => student === eachStudent && availableStudents.splice(availableStudents.indexOf(eachStudent), 1)))
            const availableStudentsSet = new Set(availableStudents); //remove duplicates from array;
            availableStudents = [...availableStudentsSet]

            
            /**Load balancing*/
            availableStudents = availableStudents.sort((a, b) => a.shifts?.length - b.shifts?.length ); //sort by number of shifts (ascending)

            /**Assignment */
            const availableLabAssistants = availableStudents.filter( (student) => student.role === "assistant");
            const availableSupervisors = availableStudents.filter( (student) => student.role === "supervisor");

            //assistants
                if(slot.Shift.assistants.length < 3 && availableLabAssistants.length > 0){
                    const assistantsNeeded = 3 - slot.Shift.assistants.length;
                    const assistantsToAssign = availableLabAssistants.slice(0, assistantsNeeded);
                    
                    assistantsToAssign.forEach(assistant => {
                        slot.isShift = true;
                        slot.Shift.assistants.push(assistant);
                    });
                }else{
                if(availableLabAssistants.length <= 0){
                    warning.push({slotID: slot.slotID, msg: "0 assistants available"});
                }
            }

            //supervisor
            if(slot.Shift.supervisor.length < 3 && availableSupervisors.length > 0){
            const supervisorsNeeded = 3 - slot.Shift.assistants.length;
            const assistantsToAssign = availableLabAssistants.slice(0, supervisorsNeeded);

            assistantsToAssign.forEach(assistant => {
                slot.isShift = true;
                slot.Shift.assistants.push(assistant);
            });
            }else{
                if(availableSupervisors.length <= 0){
                    warning.push({slotID: slot.slotID, msg: "0 supervisors available"});
                }
            }
        })
    }
    )
    return {newSchedule: newSchedule, warnings: warning};
}
