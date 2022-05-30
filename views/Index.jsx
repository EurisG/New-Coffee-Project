const React = require('react');
const Products = require('../models/coffee')

class Index extends React.Component{

    render() {
        const {Products} = this.props;
        return(

                <div>
                        <h1>Hello Welcome</h1>

                        <nav>
                            <a href='/home/new'>Create New Product</a>
                        </nav>
                            <ul>
                                {Products.map(( Products, i) => {
                                    return (
                                            <li>
                                                    <a href={`/home${i}`}>{Products.name}</a><br />Price:{' '}${Products.price}
                                            </li>

                                    );
                                })}
                                
                            </ul>
                            <a href='/'>Back</a>
                </div>

        );




    }


};


module.exports = Index;