import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';

const MySearch = (props) => {
    let input;
    const handleClick = () => {
        props.onSearch(input.value);
    };
    return (
        <div className="search-bar">
            <input
                className="form-control"
                style={{backgroundColor: 'white'}}
                ref={n => input = n}
                type="text"
                placeholder="Search..."
                onKeyUp={handleClick}
            />
            {/*<button className="btn btn-warning" onClick={ handleClick }>Search</button>*/}
        </div>
    );
};

export const SearchableTable = (props) => (
    <ToolkitProvider
        keyField="id"
        data={props.data}
        columns={props.columns}
        search
    >
        {
            props => (
                <div className="world-container">
                    <MySearch {...props.searchProps}  />
                    <br/>
                    <BootstrapTable
                        {...props.baseProps} striped={true}
                    />
                </div>
            )
        }
    </ToolkitProvider>
);


