export async function loadStudents({commit}){
    commit('fetchStudentsBegin')
    commit('fetchStudentsSuccess', {
        data: [{
            id: 1,
            fullName: 'hien',
            email: 'hien@gmail.com',
            status: 1,
            createAt: '2021-12-12',
            updateAt: '2022-01-01'
        }]
    })
}