/**
 * 해당 util은 다음과 같이 구성되어 있습니다.
 * [1] jsQr 라이브러리의 input으로 사용될 Uint8ClampedArray형태로 파일을 변환하는 함수
 *     파일 -> IMG -> Uint8ClampedArray 3번의 변환을 거칩니다.
 * [2] 파일 업로드시 validation을 위한 함수
 * */

// [1] - 브라우저에 업로드된 파일 Read
export const readFile = file =>
  new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = reject;
    fr.readAsDataURL(file);
  });

// [1] - File을 Img로 변경
export const convertFileToImage = src =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

// [1] - canvas를 이용하여 img를 Uint8ClampedArray로 변경
export const convertImageToUint8ClampedArray = (canvas, img) => {
  const imgInfo = canvas;
  imgInfo.current.width = img.width;
  imgInfo.current.height = img.height;
  const ctx = imgInfo.current.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
};

// [2] - 파일 Drag & Drop시 validation
export const validateFiles = files => {
  if (files.length !== 1) {
    alert('하나의 이미지만 업로드 해주세요.');
    return false;
  }
  const file = files[0];
  const validTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/x-icon',
  ];
  if (validTypes.indexOf(file.type) === -1) {
    alert('이미지 파일만 업로드 가능합니다.');
    return false;
  }
  return file;
};
