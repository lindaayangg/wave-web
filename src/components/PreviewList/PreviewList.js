import React, {Fragment} from 'react';
import {Grid, Icon} from "semantic-ui-react";
import {
  StyledSmallPreviewImg,
  StyledImageContainer,
  StyledRemoveButton,
  StyledFileIcon,
  StyledContainer
} from "./styles";

class PreviewList extends React.Component {
  isImage = file => {
    const fileName = file.name || file.path;
    const suffix = fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();
    if (suffix === 'jpg' || suffix === 'jpeg' || suffix === 'bmp' || suffix === 'png' || suffix === 'gif') {
      return true;
    }
  };

  render() {
    const {handleRemove} = this.props;

    return (
      <Grid.Row>
        {
          this.props.fileObjects.map((fileObject, i) => {
            const img = (this.isImage(fileObject.file) ?
                <StyledSmallPreviewImg role="presentation"
                                       src={fileObject.data}/>
                :
                <StyledFileIcon name="file alternate"/>
            );
            return (
              <StyledContainer>
                <StyledImageContainer>
                  {img}
                  <div>
                    {fileObject.file.name}
                  </div>
                  <StyledRemoveButton
                    icon
                    onClick={handleRemove(i)}>
                    <Icon name="remove"/>
                  </StyledRemoveButton>
                </StyledImageContainer>
              </StyledContainer>
            );
          })
        }
      </Grid.Row>
    );
  }
}

export default PreviewList;