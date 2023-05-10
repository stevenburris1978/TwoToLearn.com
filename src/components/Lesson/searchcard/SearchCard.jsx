import React from "react";
import Card from "../shared/Card";
import "./searchcard.css";

export default function SearchCard({ search, setSearch }) {
  return (
    <Card>
      <h2>Search By Category or Location</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search Lessons"
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </Card>
  );
}