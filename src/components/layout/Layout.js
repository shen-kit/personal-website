import Navbar from './Navbar.js'

import classes from './Layout.module.css'

function Layout(props) {
  return (
    <div className={classes.base}>
      <Navbar />
      <main>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
