import ExcelJS from "exceljs";

export async function exportToExcel(estimates) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Estimates");

  sheet.columns = [
    { header: "ID", key: "_id" },
    { header: "First Name", key: "firstname" },
    { header: "Last Name", key: "lastname" },
    { header: "Email", key: "email" },
    { header: "Phone", key: "phone" },
    { header: "ZIP", key: "zeepcode" },
    { header: "Service", key: "service" },
    { header: "Type", key: "estimateType" },
    { header: "Created At", key: "createdAt" },
  ];

  estimates.forEach(est => sheet.addRow(est));

  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
}
