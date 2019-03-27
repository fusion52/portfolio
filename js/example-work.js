import React from 'react';
import ExampleWorkModal from './example-work-modal';

class ExampleWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      selectedExample: this.props.work[0]
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, example) {
    this.setState({
      modalOpen: true,
      selectedExample: example
    });
  }

  closeModal(evt) {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return (
      <span>
        <section className='section section--alignCentered section--description'>
          {this.props.work.map((example, idx) => {
            return (
              <ExampleWorkBubble
                example={example}
                key={idx}
                openModal={this.openModal}
              />
            );
          })}
        </section>

        <ExampleWorkModal
          example={this.state.selectedExample}
          open={this.state.modalOpen}
          closeModal={this.closeModal}
        />
      </span>
    );
  }
}

class ExampleWorkBubble extends React.Component {
  render() {
    return (
      <div
        className='section__exampleWrapper'
        onClick={evt => this.props.openModal(evt, this.props.example)}
      >
        <div className='section__example'>
          <img
            alt={this.props.example.image.desc}
            className='section__exampleImage'
            src={this.props.example.image.src}
          />
          {this.props.example.image.comment}
          <dl className='color--cloud'>
            <dt className='section__exampleTitle section__text--centered'>
              {this.props.example.title}
            </dt>
            <dd />
          </dl>
        </div>
      </div>
    );
  }
}
export default ExampleWork;
export { ExampleWorkBubble };
