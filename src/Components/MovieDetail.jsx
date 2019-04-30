/* Components/MovieDetail.jsx
This component corresponds to the "modal" of each movie.
*/

import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from "reactstrap";

class MovieDetail extends Component {
  // It is the function responsible for inserting a still image in the "modal" when the API does not have an image for a particular  movie.*/
  hasBackDropImage = () => {
    if (this.props.backdrop_path === null || this.props.backdrop_path === "") {
      return (
        <img
          src={
            "https://mhaia.org/wp-content/uploads/2016/06/MHAIA-no-image-available-bg.png"
          }
          alt="no image available"
        />
      );
    } else {
      return (
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
            this.props.backdrop_path
          }`}
          alt=""
        />
      );
    }
  };
  
  render() {
    return (
      <div>
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}  size="xl" className={this.props.className} style={{fontFamily: 'Muli, sans-serif', fontSize:18}}>
         <div>
         <div style={{display: "flex", justifyContent:'space-between', backgroundColor:"#eff0f1", height:71}}> <h3 style={{ margin: '15px', fontWeight: 'bold'}}>{this.props.title}</h3>
         <button type="button" class="close" aria-label="Close" style={{margin: '15px'}}><span aria-hidden="true" onClick={this.props.toggle}>×</span></button></div>
           </div>
           <ModalBody>
           <Row style={{marginTop:20}}>
           <Col md={12} lg={5} style={{textAlign:'center', marginBottom:20}}> {this.hasBackDropImage()}</Col>
           <Col md={12} lg={5}>
           <h4>Overview:</h4>
           <p style={{textAlign:'justify'}}>{this.props.overview}</p>
           <p><i>Release date: {this.props.release_date}</i></p>
           <div style={{display:'flex', justifyContent:'space-around', marginTop:40, textAlign:'center'}}>
           <div>
           <img src='https://png.pngtree.com/svg/20170619/f30264d79c.png' width='100px' height='100px' style={{marginBottom:15}} alt='score' />
           <p>Average score: {this.props.vote_average}</p>
           </div>
           <div>
           <img src='https://cdn4.iconfinder.com/data/icons/seo-and-development-18/32/seo-computer-development-icon-18-512.png' width='100px' height='100px' style={{marginBottom:15}} alt='score' />
           <p>Votes: {this.props.vote_count}</p>
           </div>
           </div>
         </Col>
         </Row>
         </ModalBody>
         <ModalFooter style={{backgroundColor:"#eff0f1"}}>
           <Button style={{backgroundColor:"#0072ce"}} onClick={this.props.toggle} >Close</Button>
         </ModalFooter>
         
       </Modal>
     </div>
    );
  }
}

export default MovieDetail;
