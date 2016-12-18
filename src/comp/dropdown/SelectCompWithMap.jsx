import React, { Component } from 'react';

import Options              from './OptionsComp.jsx';

class SelectCompWithMap extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        const {map, selected} = props;

        this.state = {
            map         : map,
            selected    : selected
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(newProps) {
        const {selected} = newProps;
        this.setState({
            selected: selected
        });

    }

    handleChange(e) {
        const {handleOnChange} = this.props;

        if (handleOnChange) {
            handleOnChange(e);
        }
    }

    renderListItems() {
        const {hasEmptySelected}   = this.props;
        const {map, selected}      = this.state;

        let options = [];
        let parent = '';

        let emptySelected = hasEmptySelected ?
            <Options key="-1" label="ALL" value="ALL"/> : <option/>;

        if (map != null) {

            for (var key in map) {
                if(map.hasOwnProperty(key)) {
                    let val = map[key];

                    options.push(
                        <Options
                            key={key}
                            label={val}
                            value={key}>
                        </Options>);
                }
            }

            parent =
                <select
                    value={selected}
                    onChange={this.handleChange}>
                    {emptySelected}
                    {options}
                </select>;
        }
        return parent;
    }

    render() {

        return (
            <div>
                {this.renderListItems()}
            </div>
        );
    }
}

export default SelectCompWithMap;