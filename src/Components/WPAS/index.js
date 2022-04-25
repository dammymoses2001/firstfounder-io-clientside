import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import axios from "axios";


const Style = styled.div`
  section { padding: 7rem 0; }
`;

const Index =({header})=>{

  //=============================
  // FETCH COMMENT FROM JSON FILE 
  //=============================
  const [comments, setComments] = useState([])
  useEffect(() => {
    axios.get(`/api/comments.json`)
    .then(res => setComments(res.data))
    .catch(err => console.log(err))
  },[])
  //=================================
  // END COMMENT FETCH FROM JSON FILE 
  //=================================


  //============================
  // BEGIN CHECK RATING FUNCTION 
  //============================
  const checkRating = (rating) => {
    let star = [];
    for (let index = 0; index < 5; index++) {
      if (index < rating) {
        star.push(<FaStar className="color-warning" key={index} />)
      } else {
        star.push(<FaStar className="text-muted" key={index} />)
      }
    }

    return star;
  }
  //============================
  // END CHECK RATING FUNCTION 
  //============================


  const settings = {
    infinite: true,
    slidesToShow: 2,
    swipeToSlide: true,
    dots: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
        },
        {
          breakpoint: 980,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
        }
    ]
  };
 
  return (
    <Style>
      <section className="wpas">
        <div className="container">
          <div className="mb-5">
            <h3
              className="text-uppercase"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-once={true}
            >
              {header}
            </h3>
            <hr />
          </div>

          <Slider {...settings}>
            {
              comments.map((comment, key) => {
                return(
                  <div className="card border-0" key={key}>
                    <div class="card-body">
                      <div className="d-flex gap-5 align-items-center mb-4">
                        <img src={comment.image} width={80} className="rounded-circle" alt="UserImage" />
                        <div className="content">
                          <h5 className="card-title p-0 m-0">{comment.name}</h5>
                          <small>{comment.title}</small>
                          <p className="p-0 m-0">
                            {checkRating(comment.rating)}
                          </p>
                        </div>
                      </div>
                      <p className="small text-justify">{comment.body}</p>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </section>
    </Style>
  );
}

export default Index
