import type { Schedule, Students, warning } from "../src/assets/mockData"
import { mockStudents } from "../src/assets/mockData";

export const generateSchedule = (appSchedule: Schedule) => {
    const warning: warning[] = [];
    

    appSchedule.map( (timeSlot) => 
    {
        timeSlot.map( (slot) => {
            console.log(`<------------------------------------slot ${slot.slotID} details------------------------------------->`)

            /**Availability Check */
            //All the modules which have a class taking place during the slot:
            const studentsAttendingClass = slot.blockingModules.map( (blockedModules) => mockStudents.filter((eachStudent) => !eachStudent.modules?.includes(blockedModules)));
            
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
            console.log(` >>>>>>>>>>>>>>>>>>>>>>>>>slot ${slot.slotID} before AI scheduling`)
            console.log(`lab assistants available to work shift:`, availableLabAssistants.length);
            console.log(`lab supervisors available to work shift:`, availableSupervisors.length);
            console.log(`working lab assistants: `, slot.Shift.assistants.length);
            console.log(`working lab supervisor: `, slot.Shift.supervisor.length);
            console.log(`free lab assistant slots: `, 3 - slot.Shift.assistants.length);
            console.log(`free lab supervisor slots: `, 1 - slot.Shift.supervisor.length);

            //assistants
            if(slot.Shift.assistants.length < 3 && availableLabAssistants.length > 0){
                while( availableLabAssistants.length > 0){
                    if(availableLabAssistants[0].role === "assistant"){
                        slot.Shift.assistants.push(availableLabAssistants[0]);
                        availableLabAssistants.pop();
                    } 
                    else {
                        warning.push({slotID: slot.slotID, msg:`not enough assistants in ${slot.slotID}`});
                    }
                }
            } else{
                if(availableLabAssistants.length <= 0){
                    warning.push({slotID: slot.slotID, msg: "0 assistants available"});
                }
            }

            //supervisor
            if(slot.Shift.supervisor.length < 1 && availableSupervisors.length > 0){
                while( availableSupervisors.length > 0){
                    if(availableSupervisors[0].role === "supervisor"){
                        slot.Shift.supervisor.push(availableSupervisors[0]);
                        availableSupervisors.pop();
                    } 
                    else {
                        warning.push({slotID: slot.slotID, msg:`not enough supervisors in ${slot.slotID}`});
                    }
                }
            } else{
                if(availableSupervisors.length <= 0){
                    warning.push({slotID: slot.slotID, msg: "0 supervisors available"});
                }
            }
            console.log(` >>>>>>>>>>>>>>>>>>>>>>>>>slot ${slot.slotID} after AI scheduling`)
            console.log(`lab assistants available to work shift:`, availableLabAssistants.length);
            console.log(`lab supervisors available to work shift:`, availableSupervisors.length);
            console.log(`working lab assistants: `, slot.Shift.assistants.length);
            console.log(`working lab supervisor: `, slot.Shift.supervisor.length);
            console.log(`free lab assistant slots: `, 3 - slot.Shift.assistants.length);
            console.log(`free lab supervisor slots: `, 1 - slot.Shift.supervisor.length);
        })
    }
    )
    console.log(`warning: `, warning)
}
