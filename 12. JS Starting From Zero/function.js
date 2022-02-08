const rahiInfo = {
    studentId : 1,
    studentName : "Rahi",
    universityName : "BUBT"
}

const mehediInfo = {
    studentId : 2,
    studentName : "Mehedi",
    universityName : "EUB"
}

const shaonInfo = {
    studentId : 3,
    studentName: "Shaon",
    universityName : "AUST"
}

function showStudentInfo (studentDetails) {
    return `studentId = ${studentDetails.studentId}, studentName = ${studentDetails.studentName}, universityName = ${studentDetails.universityName},`
}

const rahi = showStudentInfo(rahiInfo);
const mehedi = showStudentInfo(mehediInfo);
const shaon = showStudentInfo(shaonInfo);

console.log(rahi, mehedi, shaon);