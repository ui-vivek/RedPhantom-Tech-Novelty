import React from "react";

export default function OurApproch() {
  return (
    <>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://static01.nyt.com/images/2020/01/01/business/01Techfix-print/01Techfix-print-superJumbo.gif"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption d-none d-md-block">
              <p className="text-white font-bold text-xl">
                Artificial Intelligence (AI){" "}
              </p>
              <p className="text-white ">
                (AI) is the development of computer systems that can perform
                tasks typically requiring human intelligence. It has
                applications in many industries and can transform our lives, but
                there are also concerns about its ethical implications
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://64.media.tumblr.com/68eba6428b1e95bd4e349a16c717c880/tumblr_p0168gtRdI1runoqyo3_540.gif"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption d-none d-md-block">
              <p className="text-white fort-bolx text-xl">
                The Benefits of Artificial Intelligence (AI)
              </p>
              <p className="text-white">
                AI has the potential to revolutionize many industries and
                improve the efficiency and effectiveness of various tasks.
                However, it is important to ensure that its implementation is
                ethical and does not result in harm to individuals or society as
                a whole.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://static01.nyt.com/images/2022/01/06/business/05Techfix-illo/05Techfix-illo-articleLarge.gif?quality=75&auto=webp&disable=upscale"
              class="d-block w-100"
              alt=""
            />
            <div class="carousel-caption d-none d-md-block">
              <p className="text-white fort-bolx text-xl">
                Understanding Machine Learning
              </p>
              <p className="text-white">
                Machine learning is a subfield of artificial intelligence that
                enables computer systems to automatically improve their
                performance at specific tasks with experience. It involves
                training algorithms on large datasets and allowing the computer
                to learn and improve its performance over time. Machine learning
                has numerous applications, including image recognition, natural
                language processing, and predictive modeling. Understanding the
                basics of machine learning is becoming increasingly important in
                today's world, as it is driving many technological advancements
                and innovations.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
