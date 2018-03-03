/**
 * Created by jiaow on 3/03/2018.
 */
import React from 'react'
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 79'},

];

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            isStockOnly: false
        }
    }

    handleTextChange = (text) => {
        this.setState({
            searchText: text
        })
    }

    handleStockChange = (stock) => {
        this.setState({
            isStockOnly: stock
        })
    }

    render() {
        return (
            <div>
                <SearchBar onTextChange={this.handleTextChange} onStockChange={this.handleStockChange}
                           searchText={this.state.searchText} isStockOnly={this.state.isStockOnly}/>
                <ProductTable products={PRODUCTS} searchText={this.state.searchText}
                              isStockOnly={this.state.isStockOnly}/>
            </div>
        )
    }
}

class SearchBar extends React.Component {
    textChange = (e) => {
        const text = e.target.value;
        this.props.onTextChange(text)
    }

    stockChange = (e) => {

        const isStock = e.target.checked;
        this.props.onStockChange(isStock)
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this.textChange}/>
                    <p>
                        <input type="checkbox" checked={this.props.isStockOnly} onChange={this.stockChange}/>
                        <span>Only show products in stock</span>
                    </p>
                </form>
            </div>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach(product => {
            if (product.name.indexOf(this.props.searchText) === -1) {
                return;
            }
            if (this.props.isStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category}/>
                )
            }


            rows.push(
                <ProductRow product={product} key={product.name}/>
            )

            lastCategory = product.category;
        })
        return (
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category
        return (
            <tr>
                <th colSpan='2'>
                    {category}
                </th>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : (<span className="text-danger">{product.name}</span>)

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

export default FilterableProductTable;