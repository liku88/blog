import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import dp from "../../assets/dp.jpg";
import dp1 from "../../assets/brother.jpg";
import Footer from "../../components/Footer";

function AboutUS() {
  return (
    <div>
      <div className="mt-5 collage d-flex justify-content-center align-items-center">
        <div
          className="card text-center"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="card-header">
            <h1>TRAVEL</h1>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              "I don't know where I'm going, but I'm on my way."
            </h5>
            <Link to="/" className="btn btn-info mt-4">
              Let's Explore
            </Link>
          </div>
        </div>
      </div>
      <div className="row mt-5" style={{ textAlign: "center" }}>
        <div
          className="col col-md-4 col-md-push-8"
          style={{ maxWidth: "12.5rem" }}
        >
          <span className="name">Saksham Hadokar</span>
          <span className="role">Content Writer</span>
        </div>
      </div>

      <div className="mt-3 row">
        <div className="col-12 col-md-6" style={{ maxWidth: "12.5rem" }}>
          <img className="team-img" src={dp1} alt="dp1"></img>
        </div>
        <div className="col-12 col-md-9">
          <p className="para">
            I am Saksham Hadokar, a freelance writer. Adventure is my day to day
            living, i live and i write into the art forms, several of them you
            know, some you don't, so i am here to show that is unknown through
            blogs that fascinates, teaches and poetry that expresses the real
            you, although I do find it hard to keep from mixing the two. I live
            in Himachal Pradesh a state in India ,I have been writing since i
            was a child by some means till where i found it so worthwhile the
            time, where expression tells the story of time and life, I'm
            currently studying in delhi Pursuing my degree and living and
            writing.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="d-flex flex-row-reverse mt-5">
        <div
          className="col-12 col-md-4 col-md-push-8"
          style={{ maxWidth: "12.5rem", textAlign: "center" }}
        >
          <span className="name">Anshika</span>
          <span className="role">Software Developer</span>
        </div>
      </div>

      <div className="d-flex mt-3 flex-row-reverse ">
        <div
          className="col-12 col-md-6"
          style={{ maxWidth: "12.5rem", textAlign: "center" }}
        >
          <img className="team-img" src={dp} alt="dp"></img>
        </div>
        <div className="col-12 col-md-9">
          <p className="para" style={{ textAlign: "right" }}>
            Hi everyone, My name is Anshika and I’m a software developer. I work
            at Publicis Sapient. My background is in computer science. Before
            joining this company, I completed my B.Tech from National Institute
            of Technology, Hamirpur. I’m excited to work at Publicis Sapient to
            solve our clients’ biggest challenges!
            <br />I have many hobbies, and basketball is one of the hobbies I
            have. Basketball is sport that requires personal skill, team work
            and speed. Basketball is a great sport, I enjoy every time when I
            crossover the opponent, and then I score. Team work is one of the
            important key to play basketball.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUS;
