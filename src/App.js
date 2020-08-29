import React, { Component } from 'react';
import './App.css';

import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component {
    sampleParagraphs = [
        'He excelled at firing people nicely.',
        'The lake is a long way from here.',
        'Writing a list of random sentences is harder than I initially thought it would be.',
        'For oil spots on the floor, nothing beats parking a motorbike in the lounge.',
        'He is good at eating pickles and telling women about his emotional problems.',
        'As he looked out the window, he saw a clown walk by.',
        'Warm beer on a cold day isn\'t my idea of fun.',
        'David proudly graduated from high school top of his class at age 97.',
        'Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair.',
        'Tuesdays are free if you bring a gnome costume.',
    ];

    randP() {
        return this.sampleParagraphs[
            Math.floor(Math.random() * (this.sampleParagraphs.length+1))
        ];
    }

    range(size=5) {
        let res = [];
        for (let i=0; i<Math.abs(size); i++) {
            res.splice(0, 0, i);
        }
        return res.reverse();
    }

    state = {
        username: 'default',
        veces: this.range(Math.floor(Math.random()*10)),
    };

    username_changed = event => {
        this.setState({
            username: event.target.value
        });
    }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <br />
        <UserInput
            default={this.state.username}
            changed={this.username_changed}
        />
        {this.state.veces.map(x =>
            <UserOutput p1={this.randP()}
                        p2={this.randP()}
                        key={`p${x}`}
                        username={this.state.username}
            />
        )}
      </div>
    );
  }
}

export default App;
