import React from 'react';
import styled from 'styled-components';
import { mapCSVtoObject } from '@/service/csvMapper';
import NodesDispatchClass from '@/module/node/dispatch';

const StyledButton = styled.button<{ onClick: () => void }>``;

const FileUpload = styled.input`
  display: none;
`;

const handleOnClick = (): void => {
  const uploadButton = document.getElementById('csvUpload');
  if (uploadButton) {
    uploadButton.click();
  }
};

const handleUploadOnChange = (dispatch: NodesDispatchClass) => (): void => {
  try {
    const uploadInput = document.getElementById('csvUpload') as HTMLInputElement;
    if (uploadInput && uploadInput.files) {
      const { files } = uploadInput;
      if (files && files[0].type === 'text/csv') {
        const reader = new FileReader();
        reader.onloadend = (event): void => {
          const content = event?.target?.result;
          if (content && typeof content === 'string') {
            const nodes = mapCSVtoObject(content);
            if (nodes) {
              if (nodes.tickets) {
                Object.values(nodes.tickets).forEach((ticket) => {
                  dispatch.addTicket(ticket);
                });
              }
              if (nodes.headers) {
                Object.values(nodes.headers).forEach((header) => {
                  dispatch.addHeader(header);
                });
              }
            } else {
              throw new Error('Unable to find row of headers in CSV.');
            }
          }
        };
        reader.readAsText(files[0]);
      } else {
        throw new Error('Please upload a CSV file.');
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const Button: React.FC = () => {
  const NodesDispatch = new NodesDispatchClass();

  return (
    <div>
      <FileUpload id="csvUpload" type="file" onChange={handleUploadOnChange(NodesDispatch)} />
      <StyledButton onClick={handleOnClick}>Upload</StyledButton>
    </div>
  );
};

export default Button;
