import React from 'react';

/*
 * @class Item
 * @extends React.Component
 */
class StockListItem extends React.Component {
    /*
     * @method render
     * @returns {JSX}
     */
    render () {
        return <tr className="stock-list-item">
            <td>{this.props.item.name}</td>
            <td>${this.props.item.price}</td>
        </tr>;
    }
}

// Prop types validation
StockListItem.propTypes = {
    item: React.PropTypes.object.isRequired,
};

export default StockListItem;
