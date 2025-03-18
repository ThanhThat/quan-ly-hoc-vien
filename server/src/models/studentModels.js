import pool from "../config/database";

export const StudentModel = {
  create: async (data) => {
    const [rows] = await pool.query(
      `
        INSERT INTO
        students(name, cccd, dob, address, type)
        VALUES(?, ?, ?, ?, ?)
      `,
      [data.name, data.cccd, data.dob, data.address, data.type]
    );

    return rows.id;
  },

  saveImage: async (studentId, avatar, idCardFront, idCardBack) => {
    const query = `
      UPDATE students
      SET avatar = ?, idCardFront = ?, idCardBack = ?
      WHERE id = ?
    `;

    const [rows] = await pool.query(query, [
      avatar,
      idCardFront,
      idCardBack,
      studentId,
    ]);
  },
};
