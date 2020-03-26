import React from 'react';
import styled from 'styled-components';
import { mapCSVtoObject } from '@/service/csvMapper';
import NodesDispatchClass from '@/module/node/dispatch';

const Button = styled.button``;

const FileUpload = styled.input`
  display:none;
`;

export default () => {
  const NodesDispatch = new NodesDispatchClass();

  const handleOnClick = () => {
    const uploadButton = document.getElementById('csvUpload');
    if (uploadButton) {
      uploadButton.click();
    }
  };

  const handleUploadOnChange = () => {
    const uploadInput = document.getElementById('csvUpload') as HTMLInputElement;
    if (uploadInput && uploadInput.files) {
      const { files } = uploadInput;
      if (files && files[0].type === 'text/csv') {
        const reader = new FileReader();
        reader.onloadend = (event) => {
          const content = event?.target?.result;
          if (content && typeof content === 'string') {
            const tickets = mapCSVtoObject(content);
            Object.values(tickets).forEach((ticket) => {
              NodesDispatch.addNode(ticket);
            });
          }
        };
        reader.readAsText(files[0]);
      }
    }
  };

  return (
    <div>
      <FileUpload id="csvUpload" type="file" onChange={handleUploadOnChange} />
      <Button
        onClick={handleOnClick}
      >
        Upload
      </Button>
    </div>
  );
};
