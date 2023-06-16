import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeExample extends React.Component {
    render() {
        const { element, text } = this.props;

        return (
            <Fade left>
                {React.createElement(element, null, text)}
            </Fade>
        );
    }
}

export default FadeExample;