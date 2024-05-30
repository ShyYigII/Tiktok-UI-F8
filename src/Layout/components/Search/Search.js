import HeadlessTippy from "@tippyjs/react/headless";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as searchService from "~/Services/searchService";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/Layout/components/AccountItems";
import styles from "./Search.module.scss";
import { useDebounce } from "~/Hook";

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const deBouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const handleClearSearch = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  useEffect(() => {
    if (!deBouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    // fetch(
    //   `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
    //     deBouncedValue
    //   )}&type=less`
    // )
    setLoading(true);
    const fetchApi = async () => {
      const result = await searchService.search(deBouncedValue);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [deBouncedValue]);

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {searchResult.map((result) => {
                return <AccountItem key={result.id} data={result} />;
              })}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            spellCheck={false}
            onFocus={() => setShowResult(true)}
            onChange={handleChange}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                onClick={handleClearSearch}
              />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
          <button className={cx("search-btn")}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              onMouseDown={(e) => {
                e.preventDefault();
              }}
            />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
