import React from 'react';


const About = () => {

    const style={
        listStyle : 'none'
    }

  return (
    <div>
      <h1>This is About Page</h1>
      <p>This app is create using React Router. </p>
        <p> React Router can be used to add the component as a page without using anchor tag.</p>
      <ul style={style}>
          <li>BrowserRouter -  to add the router functionality.</li>
          <li>Route -  redirect to the component.</li>
          <li>Switch - returns only one first matching route.</li>
        <li>"exact" - returns any number of routes that match exactly.</li>
          <li>Link -  to create link.</li>
      </ul>
    </div>
  );
}

export default About;