import React, { useCallback, useState, useContext } from 'react';
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import { propsDropZoneI } from '../../interfaces/appInterfaces'
import './styles.css';



const DropZone: React.FC<propsDropZoneI> = ({ setFile }) => {

    const [fileUrlSelected, setfileUrlSelected] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        const fileUrl = URL.createObjectURL(file)
        setfileUrlSelected(fileUrl)
        setFile(file)
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return(
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {fileUrlSelected ? <img src={fileUrlSelected}/> : ( <p> <FiUpload /> Imagem do Ponto de Coleta.</p> )}
    </div>
  )
}

export default DropZone;