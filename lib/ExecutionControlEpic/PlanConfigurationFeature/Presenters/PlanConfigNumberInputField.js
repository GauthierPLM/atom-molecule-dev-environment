'use babel';
// @flow

import React from 'react';

export default class PlanConfigNumberInputField
  extends React.Component<DefaultProps, Props, State> {
  props: Props;
  state: State;
  static defaultProps: DefaultProps;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          overflow: 'auto',
          margin: '5px',
          height: '40px',
          flex: '1',
        }}
      >
        <span
          className="tool-name-background-color text-color-highlight"
          style={{
            display: 'flex',
            overflow: 'auto',
            alignItems: 'center',
            borderRadius: '10px 0px 0px 10px',
            padding: '5px 10px',
            fontSize: '12px',
            minWidth: '80px',
          }}
        >
          {this.props.title}
        </span>
        <input
          type="number"
          className="text-color-highlight input-number native-key-bindings"
          style={{
            display: 'flex',
            overflow: 'auto',
            padding: '5px 10px',
            flex: '1',
            borderRadius: '0px 10px 10px 0px',
          }}
          value={this.props.value}
          onChange={e => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}

PlanConfigNumberInputField.propTypes = {};

PlanConfigNumberInputField.defaultProps = {};

type DefaultProps = {};

type Props = {
  value: number,
  title: string,
  onChange(value: number): void,
};

type State = {};