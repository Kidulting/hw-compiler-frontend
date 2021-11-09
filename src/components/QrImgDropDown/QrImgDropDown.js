import './QrImgDropDown.css'
import {AiOutlineUpload} from 'react-icons/ai'
import {useState, useEffect, useRef} from 'react';
import {readFile, convertFileToImage, convertImageToUint8ClampedArray, validateFiles} from '../../utils/file'
import jsQR from "jsqr-es6";

function QrImgDropDown({qrParser, dataFormat}){
    const [img, setImg] = useState(null);
    const canvas = useRef();

    const dragPrevent = (e) => {
        e.preventDefault();
    };

    const fileDropDown = (e) => {
        e.preventDefault();
        const file = validateFiles(e.dataTransfer.files);
        if(file !== false){
            readFile
    (file).then((imgFile)=>{
                setImg(imgFile);
            });
        } 
    };

    useEffect(()=>{
        if(img !== null){
            convertFileToImage(img).then((result)=>{
                const imageData = convertImageToUint8ClampedArray(canvas, result);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                if(code){
                    try{
                        //QR 코드 파싱, 학번 유효, 발급일자 유효한지 체크 후 라우팅.
                        const loginDto = qrParser(code.data, dataFormat);
                        console.log(loginDto);
                    }catch(e){
                        console.log(e);
                    }
                }else{
                    alert("QR 코드 파싱 실패 오류 제어 로직");
                }
            });
        }
    },[img, qrParser, dataFormat]);

    return(
        <>
        <div className="drop-container"
             onDragOver={dragPrevent}
             onDragEnter={dragPrevent}
             onDragLeave={dragPrevent}
             onDrop={fileDropDown}>
            
            <div className="drop-message">
                <AiOutlineUpload size="36"></AiOutlineUpload>
                <div>모바일 학생증 QR코드 이미지를 올려주세요.</div>
            </div>
        </div>
        <canvas ref={canvas} className='hiddenElement'/>
        </>
    )
}

export default QrImgDropDown;