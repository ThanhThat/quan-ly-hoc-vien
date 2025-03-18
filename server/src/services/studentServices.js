import { insertStudent } from "../models";

export const createStudentService = async (data) => {
  try {
    const studentId = await insertStudent(data);

    return studentId;
  } catch (error) {
    console.log("Error creating student: ", error);
    throw new Error("Database error!");
  }
};
