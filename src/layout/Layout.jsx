import PropTypes from "prop-types";

export default function Layout({ children }) {
     return (
          <div className="layout">
               <main className="main"> {children} </main>
          </div>
     );
}

//define proptypes
Layout.propTypes = {
     children: PropTypes.node.isRequired,
};
