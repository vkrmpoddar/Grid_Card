import logo from "./logo.svg";
import "./App.css";
import react, { useState, useEffect } from "react";
import Card from "./Card";
import { Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";




function App() {
  const [users, setUsers] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchusers = () => {
    setLoading(true);
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {

          //console.log(json);
          setUsers(json);
          setLoading(false);
        });
    }
    catch (error) {
      console.error(error);
      return error;
    }

  };
  useEffect(() => {
    fetchusers();

  }, []);



  return (
    <div className="App">
      <div className="mobile">

        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          users.map((user, index) => {
            if (!buttonClicked && index > 2) {
              return;
            }
            return (
              <>
                <Card user={user} />
              </>
            );
          })
        )}
      </div>
      <button
        onClick={() => {
          setButtonClicked(true);
        }}
        className="btn"
      >
        Show More
      </button>
    </div>
  );
}

export default App;
