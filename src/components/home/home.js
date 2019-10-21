import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Home extends Component {

    renderTextField() {

    }

    renderButtons() {
        return (
            <Button vairant="contained" color="primary">
                ~ Send a Wave ~
            </Button>
        )
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
            </div>
        );
    }
}

export default Home;
