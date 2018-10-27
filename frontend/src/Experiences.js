import React, { Component } from "react";
import Experience from "./Experience.js"
import img from './yoga.jpg'
import pug from './pugs.jpg'
import taichi from './taichi.jpeg'
class Experiences extends Component {
  render() {
    return (
      <div>
        <h2>EXPERIENCES</h2>
        <ul>
          <Experience imageSrc = {img} Title = "Yoga"
          Descr="Take outdoor yoga classes in Central Park. All levels welcome. Enjoy the perfect setting to do yoga on the grass in New York City and be in harmony with nature."
          Time="2018-11-02"/>
          <Experience imageSrc = {pug} Title = "Pug Meetup"
          Descr="A meeting of Pug loving minds! Both you and your posts will be immediately removed if you join our group with intentions of soliciting members for breeding purposes or selling pug puppies."
            Time="2018-11-10"/>
          <Experience imageSrc = {taichi} Title = "Tai Chi"
          Descr="Welcome to the World Tai chi boxing association, NYC branch. This class will teach self healing and self defense in the Old yang style tai chi system as developed by Erle Montaigue."
            Time="2018-11-14"/>

        </ul>
      </div>
    );
  }
}

export default Experiences;
