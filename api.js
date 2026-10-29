
const mockStudentDb = [
  //Test Case 1 - Comment this block
  { // from here
    id: Date.now(),
    firstName: "Harry",
    lastName: "Potter",
    email: "h.potter@hogwarts.uk"
  },
  {
    id: Date.now() + 1,
    firstName: "Ron",
    lastName: "Weasley",
    email: "r.weasley@hogwarts.uk"
  } // to here
 //Test Case 2 - Remove the comment "/**/"
];

export function getStudentsAPI() {
  return mockStudentDb;
}

export function addStudentsAPI(newStudentData) {
  const savedStudent = {
    id: Date.now(),
    ...newStudentData
  };

  mockStudentDb.push(savedStudent);

  return savedStudent;
}
