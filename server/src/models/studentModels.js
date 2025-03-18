import pool from "../config/database";

export const insertStudent = async (data) => {
  const [rows] = await pool.query(
    `
      INSERT INTO
      students(name, cccd, dob, address, type)
      VALUES(?, ?, ?, ?, ?)
    `,
    [data.name, data.cccd, data.dob, data.address, data.type]
  );

  return rows.id;
};
