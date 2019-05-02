/* Components/MovieDetail.jsx
This component corresponds to the "modal" of each movie.
*/

import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from "reactstrap";
import ReactPlayer from 'react-player';

const API_KEY = "81cccefa5d8106ac2032d82235c675bc";

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
        trailers: [],
        isKeyGood: false,
        showPlayer: false
    }
 this.changeApproval = this.changeApproval.bind(this);
 this.toggle = this.toggle.bind(this);

  };

/*Fetch Functions*/
changeApproval(){
   this.fetchTrailer()
   this.fetchValidTrailer()
 }

   fetchValidTrailer(){
     if(this.state.trailers.length > 0) {
       this.setState({
         isKeyGood : true

       })
       }
     }


   fetchTrailer() {
    const test = `http://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=${API_KEY}`;
    fetch(test)
     .then(response => response.json())
     .then(trailerData => {
        this.setState({
           trailers: trailerData.results
         })
     })
   }

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

  // It is the function that allows us to close the trailer.
  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }
  
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
           <div style={{display:'flex', justifyContent:'space-between'}}>
           <p><i>Release date: {this.props.release_date}</i></p>
           <div>
           <Button onClick={this.changeApproval} style={{float:'right'}}>See Trailer</Button>
           
           {this.state.isKeyGood
            ? <ReactPlayer isOpen={this.isOpen} toggle={this.toggle} url={`https://www.youtube.com/watch?v=${this.state.trailers[0].key}`} width='100%' controls playing={this.state.showPlayer} />
            :  null
          }
          </div>
           </div>
           <div style={{display:'flex', justifyContent:'space-between', marginTop:40, textAlign:'center'}}>
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
