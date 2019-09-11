import React, { Component } from "react";
import Bound from "bounds.js";
import Singlepart from "./Single";

class Artical extends Component {
  componentDidMount() {
    // lazy loading images
    const boundary = Bound({
      margins: { bottom: -50 }
    });

    const boundary2 = Bound({
      margins: { bottom: -50 }
    });

    let images = document.querySelectorAll(".img");
    let posts = document.querySelectorAll(".h1");

    const onImageEnter = image => {
      return () => {
        image.src = image.dataset.src;
        boundary.unWatch(image);
      };
    };
    const onPEnter = post => {
      return () => {
        post.classList.toggle("showup");
        boundary2.unWatch(post);
      };
    };

    posts.forEach(post => {
      boundary2.watch(post, onPEnter(post));
    });

    images.forEach(img => {
      boundary.watch(img, onImageEnter(img));
    });
  }
  render() {
    return (
      <div className={"Artical"}>
        <ul>
          <Singlepart
            link={"/post1"}
            imgsrc={
              "http://localhost:5000/api/picture/one/ldr7-1566200714659.jpg"
            }
            content={`How far can imagination go? This is an example.`}
          />
          <Singlepart
            link={"/post1"}
            imgsrc={
              "http://localhost:5000/api/picture/one/meandearlandthedyinggirl-1568199984174.jpg"
            }
            content={`That's a film that worth saving time for! Best in 2016, even now
            is january.`}
          />
          <Singlepart
            link={"/post1"}
            imgsrc={
              "http://localhost:5000/api/picture/one/boyhood-1566288713858.jpg"
            }
            content={`It's so different from other movies, a masterpiece!
            `}
          />
          <Singlepart
            link={"/post1"}
            imgsrc={
              "http://localhost:5000/api/picture/one/hibana-1566291844316.jpg"
            }
            content={`So warm, so heartbreaking, so beautiful, just breathtaking!
            `}
          />
          <Singlepart
            link={"/post1"}
            imgsrc={
              "http://localhost:5000/api/picture/one/terracehousealoha-1565784144585.jpg"
            }
            content={`It shows the real life & emotion about young people in japan.
            `}
          />
        </ul>
      </div>
    );
  }
}

export default Artical;