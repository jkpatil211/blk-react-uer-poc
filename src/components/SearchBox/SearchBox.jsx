import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className="searchbox">
            <div className="search-form-container searchBar-color-white">
                <input type="text" id="searchTextOpt" name="searchText" maxlength="500" data-enableautocomplete="true"
                    placeholder="Search for a fund or ticker"
                    className="searchBar-color-white search-text-freeform-variant ticker ui-autocomplete-input" autocomplete="off"
                />
                <div className="fa-search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
    )
}

export default SearchBox;