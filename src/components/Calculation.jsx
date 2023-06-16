import React, { useState } from "react";

const StudentForm = () => {
  const [students, setStudents] = useState([{ name: "" }]);
  const [marks, setMarks] = useState([{ marks: 0 }]);
  const [ages, setAges] = useState([{ ages: 0 }]);
  const [totalMarks, setTotalMarks] = useState(0);

  const handleNameChange = (event, index) => {
    const updatedName = [...students];
    updatedName[index].name = event.target.value;
    setStudents(updatedName);
  };

  const handleMarksChange = (event, index) => {
    const updatedMark = [...marks];
    updatedMark[index].marks = parseInt(event.target.value);
    setMarks(updatedMark);
    calculateTotalMarks();
  };

  const handleAgeChange = (event, index) => {
    const updatedAge = [...ages];
    updatedAge[index].ages = parseInt(event.target.value);
    setAges(updatedAge);
  };

  const addField = () => {
    setStudents([...students, { name: "" }]);
    setMarks([...marks, { marks: 0 }]);
    setAges([...ages, { ages: 0 }]);
  };

  const deleteField = (index) => {
    const updatedStudents = [...students];
    const updatedMarks = [...marks];
    const updatedAges = [...ages];

    const deletedMark = updatedMarks[index].marks;
    updatedStudents.splice(index, 1);
    updatedMarks.splice(index, 1);
    updatedAges.splice(index, 1);

    setStudents(updatedStudents);
    setMarks(updatedMarks);
    setAges(updatedAges);
    setTotalMarks(totalMarks - deletedMark);
  };

  const calculateTotalMarks = () => {
    const total = marks.reduce((sum, value) => sum + value.marks, 0);
    setTotalMarks(total);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(students);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name[]"
                  value={student.name}
                  required
                  onChange={(event) => handleNameChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="marks[]"
                  value={student.marks}
                  required
                  onChange={(event) => handleMarksChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="age[]"
                  value={student.age}
                  required
                  onChange={(event) => handleAgeChange(event, index)}
                />
              </td>
              <td>
                <button type="button" onClick={() => deleteField(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <label>Total Marks:</label>
      <span>{totalMarks}</span>
      <br />
      <button type="button" onClick={addField}>
        Add New
      </button>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default StudentForm;
