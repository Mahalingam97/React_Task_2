import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Clipboard from "clipboard";
import FruitResultRow from "./FruitResultRow";


export default class FruitResults extends PureComponent {
  static propTypes = {
    fruitData: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard");
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render() {
    const fruitData=this.props.fruitData;
    return (
      <div className="component-fruit-results">
        {fruitData.map(Data=> (
          <FruitResultRow
            key={ Data.title}
            symbol={Data.symbol}
            title={Data.title}
          />
        ))}
      </div>
    );
  }
}
