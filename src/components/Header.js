import React from 'react'
import '../styles/Header.css'

const holder = "owner";
var date = new Date();
var time = date.getHours();
var res;
const styles = {
  backgroundColor: "purple"
}

if (time < 12) {
  res = "morning"
} else if (time > 12 && time < 19) {
  res = "afternoon";
  styles.backgroundColor = "darkblue";
} else {
  res = "night";
  styles.backgroundColor = "black";
}

const Header = () => <header className="navbar" style={styles}>This is {holder}'s header. Good {res} :)</header>


export default Header