import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useQuery } from 'react-query';
import { Col } from "react-bootstrap";
import { API } from '../config/api';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};


function Feedback() {

  // let { id } = useParams();

  // let { data: transaction } = useQuery('transactionsCache', async () => {
  //   const response = await API.get('/transaction/' + id);
  //   return response.data.data;
  // });


  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div>

      <Navbar />
      

      


      
        <div style={styles.container}>
          
        
          <h2 className="py-5 text-danger"> Ratings Product </h2>

            <div>

              <Col xs="3">
              <img
                // src={item.product.image}
                alt="img"
                className="img-fluid"
                style={{
                  height: '120px',
                  width: '170px',
                  objectFit: 'cover',
                }}
              />
              </Col>
              
          <div style={styles.stars}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                  style={{
                    marginRight: 10,
                    cursor: "pointer"
                  }}
                />
              )
            })}
          </div>
          <textarea
            className="bg-dark"
            placeholder="What's your experience?"
            style={styles.textarea}
          />



            <button
              style={styles.button}
            >
              Submit
            </button>
            

            </div>

        
        
        </div>
      
    </div>
    
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
    color: 'white',

  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    background: '#56C05A',
    color: 'white',
    fontWeight: 500,

  }

};




export default Feedback;
