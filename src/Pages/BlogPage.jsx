import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import "./BlogPage.css";
const BlogPage = () => {
  function fetchdata() {
    fetch("http://127.0.0.1:8000/api/Blog/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <Header />
      <div class="wrapper">
        <div class="scroll-indicator"></div>
        <div class="content-wrapper">
          <div class="content">
            <div class="poster">
              <div class="poster-title">
                <h1> Article template </h1>
                <div class="line"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus voluptate, laboriosam sunt eveniet eius iure, sapiente
                  in maiores quasi saepe quas quisquam obcaecati odio{" "}
                </p>
              </div>
            </div>

            <div class="words">
              <p>
                <font class="letter"></font>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptate, laboriosam sunt eveniet eius iure, sapiente in
                maiores quasi saepe quas quisquam obcaecati odio exercitationem
                rerum, molestias aliquid ipsa excepturi laborum quaerat! Tempora
                necessitatibus culpa possimus maiores doloremque ipsa nemo
                incidunt, eos alias voluptatibus, minima obcaecati vel qui,
                repudiandae ullam! Ipsam cupiditate officia molestiae quas
                praesentium deleniti dolores quia repellat quasi dolore? Nihil
                distinctio a adipisci dolorem accusantium cupiditate quibusdam
                in, ipsum laudantium minima vero ad atque sequi earum? Debitis
                dolore neque a odio mollitia harum blanditiis tempore ea nam?
                Earum a sed odit consectetur temporibus facere vel, fugit
                pariatur?
              </p>
              <p>
                <font class="letter"></font>
                Dolor sit amet, consectetur adipisicing elit. Rem dolorem
                possimus delectus officia aspernatur rerum repellendus quos
                necessitatibus sed! Deserunt dolor maxime accusantium, vero
                nostrum ipsam iure hic repellendus, eum numquam fugiat quo fuga
                ducimus minima veritatis. Deserunt dolor maxime accusantium,
                vero nostrum ipsam iure hic repellendus, eum numquam fugiat quo
                fuga ducimus minima veritatis.
              </p>
              <p>
                <font class="letter"></font>
                Sit amet, consectetur adipisicing elit. Rem dolorem possimus
                delectus officia aspernatur rerum repellendus quos
                necessitatibus sed! Deserunt dolor maxime accusantium, vero
                nostrum ipsam iure hic repellendus, eum numquam fugiat quo fuga
                ducimus minima veritatis. Deserunt dolor maxime accusantium,
                vero nostrum ipsam iure hic repellendus, eum numquam fugiat quo
                fuga ducimus minima veritatis. Dolor sit amet, consectetur
                adipisicing elit. Rem dolorem possimus delectus officia
                aspernatur rerum repellendus quos necessitatibus sed! Deserunt
                dolor maxime accusantium.
              </p>
              <div class="buttons">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="quote">
              <p>
                {" "}
                <font class="letter">“</font>
                Nothing could be worse than the fear that one had given up too
                soon, and left one unexpended effort that might have saved the
                world.
              </p>
              <p class="author">Jane Addams</p>
            </div>
            <div class="words">
              <p>
                <font class="letter"></font>
                Sit amet, consectetur adipisicing elit. Rem dolorem possimus
                delectus officia aspernatur rerum repellendus quos
                necessitatibus sed! Deserunt dolor maxime accusantium, vero
                nostrum ipsam iure hic repellendus, eum numquam fugiat quo fuga
                ducimus minima veritatis. Deserunt dolor maxime accusantium,
                vero nostrum ipsam iure hic repellendus, eum numquam fugiat quo
                fuga ducimus minima veritatis. Dolor sit amet, consectetur
                adipisicing elit. Rem dolorem possimus delectus officia
                aspernatur rerum repellendus quos necessitatibus sed! Deserunt
                dolor maxime accusantium,
              </p>
              <div class="buttons">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="author">
              <div class="image"></div>
            </div>
          </div>
        </div>
        <div class="footerx">
          <div class="content">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores
              quasi saepe quas quisquam obcaecati odio exercitationem rerum,
              molestias aliquid ipsa excepturi laborum quaerat! Tempora
              necessitatibus
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              voluptate, laboriosam sunt eveniet eius iure, sapiente in maiores
              quasi saepe quas quisquam obcaecati odio exercitationem rerum,
              molestias aliquid ipsa excepturi laborum quaerat! Tempora
              necessitatibus
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BlogPage;
