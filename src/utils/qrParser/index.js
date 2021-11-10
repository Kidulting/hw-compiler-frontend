/** TODO: 완성 이후 고려 - 각 학교별 QR코드 데이터 포맷 조사 */
export const qrParser = (qrData, dataFormatInfo) => {
  if (typeof qrData !== 'string') { throw new Error('Error : first parameter type is qr code data, it should be string.'); }
  if (!Array.isArray(dataFormatInfo)) { throw new Error('Error : second parameter type should be array.'); }
  if (dataFormatInfo.length !== 4) { throw new Error('Error : data format Array must have 4 informations, [STUDENT_ID_SINDEX, STUDENT_ID_LENGTH, ISSUED_DAY_SINDEX, ISSUED_DAY_LENGTH]'); }

  return {
    student_id: qrData.substring(dataFormatInfo[0], dataFormatInfo[0] + dataFormatInfo[1]),
    issued_day: qrData.substring(dataFormatInfo[2], dataFormatInfo[2] + dataFormatInfo[3]),
  };
};
