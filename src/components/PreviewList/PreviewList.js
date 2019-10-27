import React, {Fragment} from 'react';
import {Grid, Typography, withStyles} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import Fab from '@material-ui/core/Fab';

const styles = {
  removeBtn: {
    transition: '.5s ease',
    position: 'absolute',
    opacity: 0,
    top: -5,
    right: -5,
    width: 40,
    height: 40,
  },
  smallPreviewImg: {
    height: 100,
    width: 'initial',
    maxWidth: '100%',
    marginTop: 5,
    marginRight: 10,
    color: 'rgba(0, 0, 0, 0.87)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    boxSizing: 'border-box',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px',
    borderRadius: 2,
    zIndex: 5,
    opacity: 1,
  },
  imageContainer: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    '&:hover $smallPreviewImg': {
      opacity: 0.3,
    },
    '&:hover $removeBtn': {
      opacity: 1,
    },
  },
};

class PreviewList extends React.Component {
  isImage = file => {
    const fileName = file.name || file.path;
    const suffix = fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();
    if (suffix === 'jpg' || suffix === 'jpeg' || suffix === 'bmp' || suffix === 'png' || suffix === 'gif') {
      return true;
    }
  };

  render() {
    const {classes, handleRemove} = this.props;

    return (
      <Grid container>
        {
          this.props.fileObjects.map((fileObject, i) => {
            const img = (this.isImage(fileObject.file) ?
                <img className={classes.smallPreviewImg} role="presentation"
                     src={fileObject.data}/>
                :
                <DescriptionIcon className={classes.smallPreviewImg}/>
            );
            return (
              <Fragment>
                <Grid item xs={4}/>
                <Grid item xs={4} key={i} className={classes.imageContainer}>
                  {img}

                  <Typography component="p">
                    {fileObject.file.name}
                  </Typography>

                  <Fab onClick={handleRemove(i)}
                       aria-label="Delete"
                       className={classes.removeBtn}>
                    <DeleteIcon/>
                  </Fab>
                </Grid>
              </Fragment>
            );
          })
        }
      </Grid>
    );
  }
}

export default withStyles(styles)(PreviewList);