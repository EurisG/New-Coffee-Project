// Importing React 
const React = require('react');
const Products = require('../models/coffee')

class Index extends React.Component{

    render() {
        const {Products} = this.props;
        return(

                <div>
                        <h1> Welcome Coffee Lover!</h1>
                        <a href='/'>Back</a>
                        <h3>Choose Item Below</h3>
                            <ul>
                            
                                {Products.map(( Products, i) => {
                                    return (
                                            <li>
                                                    <a href={`/product/${i}`}>{Products.name}</a><br />Price:{' '}${Products.price}<br /><br />
                                            </li>

                                    );
                                })}
                                
                            </ul>
                            <h3>Add New Product to Menu</h3>
                        <nav>
                            <a href='/home/new'>Create New Product</a>
                        </nav>
                            
                </div>

        );




    }


};


module.exports = Index;