import React, { useState } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";

const Search = styled.div`
.searchbutton {
    width: 50px;
    height: 20px;
}
`;
const SearchsWrapper = styled.div`
`;
const SearchInfoWrapper = styled.div`
`;
const SearchName = styled.div`
`;
const ProductSearch = () => {

    const [inputProductName,setProductName] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const onChangeProductName = (e) => {
        setProductName(e.target.value);
    }
    const search = async() => {
        const rsp = await AxiosApi.searchResultGet(inputProductName);
        if(rsp.status === 200) setSearchResult(rsp.data);
    }

    return(
        <Search>
            <input type="text" value={inputProductName} onChange={onChangeProductName} />
            <button className="searchbutton" onClick={search}>검색</button>
        
        <SearchsWrapper>
        {searchResult.map((search) => (
            <SearchInfoWrapper key={search.product_no}>
                <SearchName>{search.product_name}</SearchName>
            </SearchInfoWrapper>
        ))}
      </SearchsWrapper>
      </Search>
    );
};
export default ProductSearch;