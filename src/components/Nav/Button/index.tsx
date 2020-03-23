import React from 'react';
import styled from 'styled-components';

const Button = styled.button``;

const FileUpload = styled.input`
display:none;
`;

const handleOnClick = () => {
  console.log('clicked');
  const uploadButton = document.getElementById('csvUpload');
  console.log(uploadButton);
  if (uploadButton) {
    uploadButton.click();
  }
};

const handleUploadOnChange = (e: any) => {
  console.log('in handle on change');
  const uploadInput = document.getElementById('csvUpload');
  if (uploadInput) {
    // @ts-ignore
    const { files } = uploadInput;
    if (files[0].type === 'text/csv') {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        const content = event?.target?.result;
        if (content) {
          console.log(content);
        }
      };
      reader.readAsText(files[0]);
    }
  }
};


export default () => (
  <div>
    <FileUpload id="csvUpload" type="file" onChange={handleUploadOnChange} />
    <Button
      onClick={handleOnClick}
    >
      Upload
    </Button>
  </div>
);
