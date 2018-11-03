import React, { Component } from 'react';
import Flexi from '../Flexi/Flex/Flex';

class Flex extends Component {
    render () {
        const flexiConfig = {
            items: [
              {name: "person_name", label: "Person's Name", type: "TextField"},
              {name: "states", label: "Person's state", type: "DropDown", 
                values: ["Maharashtra", "Kerala", "Tamil Nadu"]}
            ]
          };

          let item = []

          item = flexiConfig.items.map(igKey => {
            return igKey
          })
        
        return (
            <div>
                <Flexi onSubmit={this.onFlexiSubmit} config={item}/>
            </div>
        )
    }

}

export default Flex;