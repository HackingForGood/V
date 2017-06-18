import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { Search } from 'semantic-ui-react';
import Rx from 'rxjs';

class DebouncedInput extends Component {
  componentDidMount() {
    const {
      debounceProps: {
        focus = false,
        debounceTime = 250,
        map = (event) => event.currentTarget,
        eventName = 'keyup',
      },
    } = this.props;

    if (focus) this.inputField.focus();
    
    this.observable = Rx.Observable.fromEvent(this.inputField, eventName)
      .map(map)
      .debounceTime(debounceTime)
      .subscribe(this.subscribe);
  }

  componentWillUnmount() {
    this.observable.unsubscribe();
  }

  subscribe = (val) => {
    const { debounceProps: { subscribe } } = this.props;
    subscribe(val);
  };

  render() {
    return (
      <div className="ui search searchpageInput">
        <div className="ui icon input">
            <Search
              type="text"
              ref={(ref) => {
                this.inputField = ref;
              }}
              value="" className="prompt" tabindex="0" autocomplete="off"
              {...omit({ ...this.props }, 'debounceProps')}
            />
            <i aria-hidden="true" className="search icon"></i>
        </div>
        <div className="results transition">
          <div className="message empty">
            <div className="header">No results found.</div>
          </div>
        </div>
      </div>
    );
  }
  }

  DebouncedInput.defaultProps = {
    debounceProps: {
    focus: false,
    debounceTime: 250,
    map: (event) => event.currentTarget,
    eventName: 'keyup',
  },
  };

  DebouncedInput.propTypes = {
    debounceProps: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    focus: PropTypes.bool,
    debounceTime: PropTypes.number,
    map: PropTypes.func,
    eventName: PropTypes.string,
  }),
  };

  export default DebouncedInput;
