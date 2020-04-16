import React from "react";
import { connect } from "react-redux";
import { getAnimeData } from "../actions";
import { Button } from "@material-ui/core";

function FetchButton(props) {
  const handleFetchData = e => {
    e.preventDefault();
    props.getAnimeData();
  };
  return (
    <>
      {props.isFetching ? (
        <h1>Loading</h1>
      ) : (
        <Button variant="contained" color="primary" onClick={handleFetchData}>
          Fetch Data
        </Button>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getAnimeData })(FetchButton);