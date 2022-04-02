import { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["$ USD", "€ EUR", "¥ JPY"];
const defaultOption = options[0];

class AppBar extends Component {
  //   state = {
  //     category: "",
  //   };

  //   handleCategoryState = (val) => {
  //     this.setState({ category: val });
  //   };

  handleCategorySelect = (category) => {
    this.props.categorySelect(category);
  };

  handleCurrencySelect = (selectedOption) => {
    this.props.currencySelect(selectedOption.value);
  };

  render() {
    return (
      <header className="appBar">
        <ul className="categoriesList">
          <li
            className="category"
            onClick={this.handleCategorySelect.bind(this, "WOMEN")}
          >
            WOMEN
          </li>
          <li
            className="category"
            onClick={this.handleCategorySelect.bind(this, "MEN")}
          >
            MEN
          </li>
          <li
            className="category"
            onClick={this.handleCategorySelect.bind(this, "KIDS")}
          >
            KIDS
          </li>
        </ul>

        <img src="./" alt="App icon" />

        <Dropdown
          // className={styles.currenciesRoot}
          // controlClassName={styles.currenciesControll}
          // arrowClassName={styles.currenciesArrow}
          // menuClassName={styles.currenciesMenu}
          // optionsClassName={styles.currenciesOption}
          placeholder={options[0]}
          type="text"
          name="currrency"
          options={options}
          value={defaultOption}
          onChange={this.handleCurrencySelect}
          defaultValue="WOMEN"
        />
      </header>
    );
  }
}

export default AppBar;
