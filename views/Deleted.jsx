const React = require('react');
const Products = require('../models/coffee')

class Delete extends React.Component {

    render() {
        const Products = this.props;
        return (
            <div>

                <a href="/home">Home</a>
                <br />
                
                <h2>{Products.name} was deleted from the menu.<br /> 
                Press "Home" to go back to all products !</h2>

            </div>

        );


    }


};

module.exports = Delete;