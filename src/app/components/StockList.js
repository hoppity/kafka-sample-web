import React from 'react';
import StockListItem from './StockListItem';

/*
* @class StockList
* @extends React.Component
*/
class StockList extends React.Component {

    /*
    * @method render
    * @returns {JSX}
    */
    render () {
        return <table className="stock-list">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
                {this.props.items.map(function (item, key) {
                    return <StockListItem key={key} item={item} />;
                })}
            </tbody>
        </table>;
    }

}

StockList.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default StockList;
