import React from "react";
import MainNav from "../components/MainNav";

const ErrorPage = () => {
  return (
    <div>
      <MainNav />
      <main>
        <h1>Error Occured</h1>
        <p>Something went wrong...</p>
      </main>
    </div>
  );
};

export default ErrorPage;
