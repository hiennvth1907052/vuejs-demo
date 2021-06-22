export function fetchStudentsBegin(state){
    state.students = []
}
export function fetchStudentsSuccess(state, {data}){
    state.students = data
}
export function fetchStudentBegin(state){
    state.student = {}
}
export function fetchStudentSuccess(state, {data}){
    state.student = data
}