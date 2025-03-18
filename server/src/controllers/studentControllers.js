import { createStudentService } from "../services";

export const createStudent = async (req, res) => {
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
