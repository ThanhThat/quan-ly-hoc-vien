import { createStudentService, uploadImageStudentService } from "../services";

export const createStudentController = async (req, res) => {
  const { name, cccd, dob, address, type } = req.body;

  if (!name || !cccd || !dob || !address || !type)
    return res.status(400).json({
      message: "Các trường không được bỏ trống!",
    });

  const [day, month, year] = dob.split("/");
  const formattedDob = `${year}-${month}-${day}`;

  const newStudent = {
    name,
    cccd,
    dob: formattedDob,
    address,
    type,
  };

  try {
    const result = await createStudentService(newStudent);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const uploadStudentImagesController = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);

    if (!id)
      return res.status(400).json({ message: "Student ID is required!" });

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files uploaded!" });
    }

    console.log(req.files.avatar);

    const avatarPath = req.files.avatar
      ? `/uploads/${req.files.avatar[0].filename}`
      : null;
    const idCardFrontPath = req.files.idCardFront
      ? `/uploads/${req.files.idCardFront[0].filename}`
      : null;
    const idCardBackPath = req.files.idCardBack
      ? `/uploads/${req.files.idCardBack[0].filename}`
      : null;

    const resultUpload = await uploadImageStudentService(
      id,
      avatarPath,
      idCardFrontPath,
      idCardBackPath
    );

    console.log("Check result: ", resultUpload);

    return res
      .status(200)
      .json({ message: "Upload successfully!", resultUpload });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
