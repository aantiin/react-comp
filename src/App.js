import React, {Component}   from 'react';
import logo                 from './logo.svg';
import './App.css';

import SelectComp           from './comp/dropdown/SelectCompWithMap.jsx';
import SliderCard           from './comp/slider/Slider.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.setSelectedValue = this.setSelectedValue.bind(this);

        this.state = {
            selected : "SUBMITTED"
        }
    }

    setSelectedValue(e) {
        const {value}       = e.target;
        this.setState({
            selected : value
        });

    }

    render() {
        const {selected} = this.state;

        let dropDownData = {
            SUBMITTED : "submitted",
            APPROVED : "approved",
            REJECTED : "rejected"
        };

        let hasEmptySelected = true;

        let cards = {
            'Best Seller' : {
                name : 'Best Seller',
                thumbnail : 'https://firebasestorage.googleapis.com/v0/b/dev-sayurbox.appspot.com/o/category-new%2F1479783772820_herbs-min.jpg?alt=media&token=be7dd475-dff4-4455-8d94-23910122722f'
            },
            'Cakes' : {
                name : 'Cakes',
                thumbnail : 'https://firebasestorage.googleapis.com/v0/b/dev-sayurbox.appspot.com/o/category-new%2F1479783732235_best_seller-min.jpg?alt=media&token=dea1bb9b-e2ed-4458-a51d-48e97d2de917'
            },
            'Vegetables' : {
                name : 'Vegetables',
                thumbnail : 'https://firebasestorage.googleapis.com/v0/b/dev-sayurbox.appspot.com/o/category-new%2F1479783732235_best_seller-min.jpg?alt=media&token=dea1bb9b-e2ed-4458-a51d-48e97d2de917'
            },
            'Fruits' : {
                name : 'Fruits',
                thumbnail : 'https://firebasestorage.googleapis.com/v0/b/dev-sayurbox.appspot.com/o/category-new%2F1479783772820_herbs-min.jpg?alt=media&token=be7dd475-dff4-4455-8d94-23910122722f'
            },
            'Herbs' : {
                name : 'Herbs',
                thumbnail : 'https://firebasestorage.googleapis.com/v0/b/dev-sayurbox.appspot.com/o/category-new%2F1479783732235_best_seller-min.jpg?alt=media&token=dea1bb9b-e2ed-4458-a51d-48e97d2de917'
            },
            'Milk' : {
                name : 'Milk',
                thumbnail : 'https://firebasestorage.googleapis.com/v0/b/dev-sayurbox.appspot.com/o/category-new%2F1479783732235_best_seller-min.jpg?alt=media&token=dea1bb9b-e2ed-4458-a51d-48e97d2de917'
            },
            'Meat' : {
            name : 'Meat',
                thumbnail : 'https://firebasestorage.googleapis.com/v0/b/dev-sayurbox.appspot.com/o/category-new%2F1479783732235_best_seller-min.jpg?alt=media&token=dea1bb9b-e2ed-4458-a51d-48e97d2de917'
        }
        };

        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>
                    <div className="App-intro">
                        <div>
                            <SelectComp map={dropDownData} hasEmptySelected={hasEmptySelected}/>
                        </div>
                        <div>
                            <SelectComp map={dropDownData} selected={selected} handleOnChange={this.setSelectedValue}/>
                        </div>
                        <div>
                            <label>{selected}</label>
                        </div>
                    </div>
                </div>

                <div style={{marginTop: "16px", marginBottom: "16px"}}>
                    <SliderCard cards={cards}/>
                </div>
            </div>
        );
    }
}

export default App;
