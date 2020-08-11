import React from "react";

export default function Footer() {
  
  return (
    <div className='footer'>
  <h3 className='recovered'>Serving data from Johns Hopkins University CSSE as a JSON API</h3>
      <p>Thanks to <a href='https://github.com/mathdroid/covid-19-api' >mathdroid</a> for creating the API!</p>
      <p>App created by <a href='https://twitter.com/drcberry' target='_blank'>@drcberry</a> at </p>
      <footer>
  <a href='https://musedragonmedia.com' target='_blank'><img className='footer-logo' src={'https://hosting.musedragonmedia.com/assets/img/logo.png'} alt='Muse Dragon Media LLC' /></a>
</footer>
      </div>)
}