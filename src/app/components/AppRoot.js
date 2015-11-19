import React from 'react';
import StockList from './StockList';

/*
 * @class AppRoot
 * @extends React.Component
 */
class AppRoot extends React.Component {
    /*
     * @method render
     * @returns {JSX}
     */
    render () {
        return <div className="appRoot">
            <h1>Stock Ticker</h1>
            <StockList items={this.props.state.items} />
        </div>;
    }
}

// Prop types validation
AppRoot.propTypes = {
    items: React.PropTypes.array,
};

export default AppRoot;