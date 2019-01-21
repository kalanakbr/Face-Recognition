import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange , onButtonSubmit}) =>{
    return(
        <div>
           <p className='f3'>
                {'This is Face Recognition Application.It will detect faces in your pictures.'}
           </p> 
           <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
                <input className='center br2 f4 pa2 w-70 ' type='text' onChange={ onInputChange} placeholder="&nbsp;URL"/>
                <button className='w-30 grow br2 f4 ph3 pv2 dib white bg-blue' onClick={onButtonSubmit}>Detect</button> 
            </div>
           </div>
        </div>
    );
}

export default ImageLinkForm;