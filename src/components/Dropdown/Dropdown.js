import React , { useEffect, useState }from 'react';
import styles from './Dropdown.css'

export const Dropdown = ({title, branches, selectedBranch}) => {
    const [dropDownState, setDropDownState] = useState(false)

    const chooseBranch = () => {
        setDropDownState(!dropDownState)
    }

    const printDropDown = () => {
        let options = [];
        for(let index = 0; index < branches.length; index++)
            options.push( <li key={index} onClick={() => sendBranchToParent(index)}> Branch {index + 1} </li>)
        return options
    }

    const sendBranchToParent = (index) => {
        selectedBranch(index);
    }

    return <div className={styles.branchesDropdown}> 
        <div className={styles.branchesDropdownText}
                onClick={chooseBranch}>{title}</div> 
        { dropDownState && <div className={styles.dropdown}>
            <ul className={styles.dropdownList}>{printDropDown()}</ul>
            </div> } 
    </div>
}