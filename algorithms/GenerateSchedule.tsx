import type { Students, warning } from "../src/assets/mockData"
import { type Slot, mockStudents } from "../src/assets/mockData";

export const generateSchedule = (schedule: Map<string, Map<string, Slot>>) => {
    const warning: warning[] = [];
    const scheduleArray = Array.from(schedule.entries() || []);

    scheduleArray.map( ([time, timeSlot]) => 
    {
        
        Array.from(timeSlot.entries()).map(([day, slot]) => {
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
                    if(slot.Shift.assistants.length < 3 && availableLabAssistants.length > 0){ //if there are enough assistants
                        const assistantsNeeded = 3 - slot.Shift.assistants.length;
                        const assistantsToAssign = availableLabAssistants.slice(0, assistantsNeeded);
                        
                        assistantsToAssign.forEach(assistant => {
                            slot.Shift.assistants.push(assistant);
                        });
                    }else if(availableLabAssistants.length <= 0){
                        const index = warning.findIndex((value) => value.slotID === day + " " + time);
                        const result = index == -1 ? warning.push({slotID: day + " " + time, msg: ["Managed to assign a few assistants, but not enough were available for the slot"]}) : warning[index].msg.push("MManaged to assign a few assistants, but not enough were available for the slotanaged to assign a few assistants, but not enough were available for the slot");
                        console.log(result)               
                }

                //supervisor
                if(slot.Shift.supervisor.length < 3 && availableSupervisors.length > 0){
                const supervisorsNeeded = 3 - slot.Shift.assistants.length;
                const assistantsToAssign = availableLabAssistants.slice(0, supervisorsNeeded);

                assistantsToAssign.forEach(assistant => {
                    slot.Shift.assistants.push(assistant);
                });
                }else{
                    if(availableSupervisors.length <= 0){
                        const index = warning.findIndex((value) => value.slotID === day + " " + time);
                        const result = index == -1 ? warning.push({slotID: day + " " +  time, msg: ["No supervisor was available for this slot."]}) : warning[index].msg.push("No supervisor was available for this slot.");
                        console.log(result)               
                    }
                }
        })

    }
    )
    const warningSet = new Set(warning);
     
    console.log(warningSet);
    const updatedSchedule = new Map(scheduleArray.map((timeSlot) => timeSlot));
    return { updatedSchedule, warnings: warning};
}
