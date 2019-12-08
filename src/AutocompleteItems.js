import React from 'react';

function AutocompleteItems(props) {

  let optionList;
  if (props.showOptions && props.userInput) {
    if (props.filteredOptions.length) {
      optionList = (
        <ul className="options">
          {props.filteredOptions.map((optionName, index) => {
            let className;
            if (index === props.activeOption) {
              className = 'option-active';
            }
            return (
              <li className={className} key={optionName} onClick={props.handleClick}>
                {optionName}
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="no-options">
          <em>No Option!</em>
        </div>
      );
    }
  }

  return (
    <div>{optionList}</div>
  );
}

export default AutocompleteItems;
