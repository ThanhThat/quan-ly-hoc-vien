import { StudentModel } from "../models";

export const createStudentService = async (data) => {
  try {
    const studentId = await StudentModel.create(data);

    return studentId;
  } catch (error) {
    console.log("Error creating student: ", error);
    throw new Error("Database error!");
  }
};

export const uploadImageStudentService = async (
  studentId,
  avatar,
  idCardFront,
  idCardBack
) => {
  try {
    const resultUpload = await StudentModel.saveImage(
      studentId,
      avatar,
      idCardFront,
      idCardBack
    );

    return resultUpload;
  } catch (error) {
    console.log("Error upload image: ", error);
    throw new Error("Upload image error!");
  }
};
