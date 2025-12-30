import type { Students } from "../src/assets/mockData"
import { type Slot, mockStudents } from "../src/assets/mockData";


export const generateSchedule = (schedule: Map<string, Map<string, Slot>>) => {
    const warning = new Map();
    const scheduleArray = Array.from(schedule.entries() || []);
        
    // Helper to create student copies
    const createStudentCopy = (student: Students): Students => ({
        ...student,
        shifts: [...(student.shifts || [])], //make deep copy of shifts
        modules: [...(student.modules || [])], //make deep copy of shifts
    });

    scheduleArray.forEach(([time, timeSlot]) => {
        
        Array.from(timeSlot.entries()).forEach(([day, slot]) => {            
            // Reset for debugging
            const originalMockStudents = mockStudents.map(createStudentCopy);
            
            /** Filter by blocking modules */
            let availableStudents = originalMockStudents.filter(student => {
                return slot.blockingModules.every(blockedModule => 
                    !student.modules?.includes(blockedModule)
                );
            });
            
            /** Remove unavailable students */
            if (slot.unavailable && slot.unavailable.length > 0) {
                const unavailableIds = slot.unavailable.map(s => s.studentNo);
                availableStudents = availableStudents.filter(student => 
                    !unavailableIds.includes(student.studentNo)
                );
            }
            
            /**Remove duplicates */
            const uniqueStudents: Students[] = [];
            const seenIds = new Set();
            
            availableStudents.forEach(student => {
                if (!seenIds.has(student.studentNo)) {
                    seenIds.add(student.studentNo);
                    uniqueStudents.push(student);
                }
            });
            availableStudents = uniqueStudents;
            
            /** Load balancing */
            availableStudents = availableStudents.sort((a, b) => 
                (a.shifts?.length || 0) - (b.shifts?.length || 0)
            );
            
            /** Separate by role */
            const availableLabAssistants = availableStudents.filter(student => 
                student.role === "assistant"
            );
            const availableSupervisors = availableStudents.filter(student => 
                student.role === "supervisor"
            );

            /** Assign assistants */
            if (slot.Shift.assistants.length < 3) {
                const assistantsNeeded = 3 - slot.Shift.assistants.length;
                const assistantsToAssign = availableLabAssistants.slice(0, assistantsNeeded);
                            
                assistantsToAssign.forEach(assistant => {
                    const assistantCopy = createStudentCopy(assistant);
                    slot.Shift.assistants.push(assistantCopy);
                });
                
                if (assistantsToAssign.length < assistantsNeeded) {
                    const msg = `Only ${assistantsToAssign.length} assistants available, needed ${assistantsNeeded}`;
                    // Add to warnings
                    warning.set(time+day, msg);
                    
                }
            }
            
            /** Assign supervisor */
            if (slot.Shift.supervisor.length === 0 && availableSupervisors.length > 0) {
                const supervisorToAssign = availableSupervisors[0]; // Get first available
                const supervisorCopy = createStudentCopy(supervisorToAssign);
                slot.Shift.supervisor.push(supervisorCopy);
            } else if (slot.Shift.supervisor.length === 0) {
                // Add to warnings
                warning.set(time+ " " + day, `WARNING: No supervisor available.`);
            }
            
        });
    });
        
    // Return the modified schedule (it's already mutated)
    return { updatedSchedule: schedule, warnings: warning };
};