import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    imgUrl: 'https://images.pexels.com/photos/259269/pexels-photo-259269.jpeg?cs=srgb&dl=black-and-white-boy-child-259269.jpg&fm=jpg',
    altText: 'Slide 1',
    caption: 'Where Our Story is YOUR Story',
    header: 'Welcome to Our Stories Page:'
  },
  {
    id: 2,
    imgUrl: 'https://images.pexels.com/photos/735446/pexels-photo-735446.jpeg?cs=srgb&dl=administration-adult-aged-735446.jpg&fm=jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: ''
  },
  {
    id: 3,
    imgUrl: 'https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?cs=srgb&dl=adorable-affection-boy-1739842.jpg&fm=jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'HEADER'
  }
];

class StoryCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img  className="carousel-img" src={item.imgUrl} alt={item.altText} />
          <div className="captions">
          <CarouselCaption className="text" captionText={item.caption} captionHeader={item.header} />
          </div>
        </CarouselItem>
      );
    });

    return (
      <div className="carousel-container">
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: #CBA328;
                order: 5;
                
              
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default StoryCarousel;