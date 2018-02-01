import React from 'react';
import Snail from './snail';

export default React.createClass({
    displayName: 'HomeView',
    getInitialState() {
        return {
            value: 3
        }
    },
    /** @inheritDoc */
    render() {
        return (
            <div data-app='homepage'>
                <input type='number' value={this.state.value} onChange={evt => this.setState({ value: +evt.target.value })} />
                <Snail size={this.state.value} />
            </div>
        );
    }
});
