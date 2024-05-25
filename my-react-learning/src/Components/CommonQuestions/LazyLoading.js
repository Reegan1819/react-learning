import React from "react";

const LazyLoading = () => {
  return (
    <div style={{ padding: " 20px" }}>
      <h1>Lazy Loading</h1>
      <p>
        Lazy loading is a technique used to defer the loading of non-essential
        resources at the time of the initial page load. This can help improve
        the performance of a web application by reducing the initial load time
        and only loading resources when they are needed.
      </p>
      <h2>How does lazy loading work in React?</h2>
      <p>
        In React, lazy loading can be achieved using the React.lazy() function
        and Suspense component. React.lazy() allows you to dynamically import a
        component and Suspense can be used to display a loading indicator while
        the component is being loaded.
      </p>
      <h2>What are the benefits of lazy loading?</h2>
      <p>
        Lazy loading can help improve the performance of a web application by
        reducing the initial load time and only loading resources when they are
        needed. This can result in faster load times, reduced bandwidth usage,
        and a better user experience.
      </p>
    </div>
  );
};

export default LazyLoading;
